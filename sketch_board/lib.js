export default class {
    constructor (svgDom, options) {
        this.isMobile = this._isMobile();
        this.initT = 0; // 用来记录requestAnimationFrame的时间间隔
        this.color = null;
        this.shape = null;
        this.width = null;
        this.opacity = 0.3; // 荧光笔的透明度
        this.penStyle = null; // highlighters荧光笔 || pencil铅笔
        this.onBezier = null; // 是否开启了bezier
        this.onRaf = null; // 是否开启了requestAnimationFrame API
        this.points = []; // 使用贝塞尔曲线时，记录当前path的路径数组
        this.drawing = false; // 正在绘制
        this.drawStart = { x: 0, y: 0 }; // 图形开始绘制的时候记录坐标，这个坐标不会随着拖动而拖动(只会在touchstart -> touchmove中变量传递使用)
        this.moveStart = { x: 0, y: 0 }; // 移动开始，记录坐标，随着鼠标的移动而移动
        this.offset = { x: 0, y: 0 }; // 使用requestAnimatinFrame时时候，touchmove的实时坐标
        this.currentGraph = null; // 当前正在绘制的实例
        this.animationFrame = null; // 使用requestAnimationAPI进行绘图时，requestAnimation的返回值
        this.graphAry = []; // 存储画布上的所有图形及其轨迹-可以用于上传&轨迹追加
        this.records = [[]]; // 画板历史记录
        this.records[0]._pointer = true; // 空白画板默认指针指在第一个空数组
        this.iteId = 0; // id自增
        this.isDeleteMode = false; // 是否处于擦除模式
        this.deleting = false; // 鼠标按下，正在擦除
        this.svg = svgDom; // svg DOM
        this._renderDefault(options);
        this._getViewData();
        this.svg.addEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
        this.svg.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this._regUpEvent, false);
        this.svg.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this._regMoveEvent, false);
    }

    /** 赋予默认属性 */
    _renderDefault (options) {
        this.color = options.color || 'black';
        this.shape = options.shape || 'curve';
        this.width = options.width || '2px';
        this.penStyle = options.penStyle || 'pencil';
        this.onBezier = options.onBezier !== undefined ? options.onBezier : true;
        this.onRaf = options.onRaf !== undefined ? options.onRaf : true;
    }

    /** 获取viewbox与viewport的比例，用于绘制时确定svg坐标点 */
    _getViewData () {
        let regViewBox = /^\d+[\s,]\d+[\s,](\d+)[\s,](\d+)$/;
        let viewBox = this.svg.getAttribute('viewBox');
        let matchViewBox = viewBox.match(regViewBox);
        let vWidth = parseFloat(matchViewBox[1]);
        let vHeight = parseFloat(matchViewBox[2]);
        let width = parseFloat(this.svg.getAttribute('width'));
        let height = parseFloat(this.svg.getAttribute('height'));
        this.ratioX = vWidth / width;
        this.ratioY = vHeight / height;
    }

    /** 手指按下事件注册
     * 将drawStart和moveStart的坐标置为事件坐标
     * 并标记为开始绘制
     */
    _regDownEvent = event => {
        let eventType = event.type;
        let offsetX = null;
        let offsetY = null;
        if (eventType === 'touchstart') {
            offsetX = event.touches[0].pageX - this.svg.getBoundingClientRect().left;
            offsetY = event.touches[0].pageY - this.svg.getBoundingClientRect().top;
        } else if (eventType === 'mousedown') {
            offsetX = event.offsetX;
            offsetY = event.offsetY;
        }
        offsetX = offsetX * this.ratioX;
        offsetY = offsetY * this.ratioY;
        if (this.isDeleteMode) {
            // 擦除模式
            this.deleting = true;
            let target = this._gotNearTarget({ x: offsetX, y: offsetY, isMove: false });
            target && this._erase(target);
        } else {
            this.drawStart.x = offsetX;
            this.drawStart.y = offsetY;
            this.moveStart.x = offsetX;
            this.moveStart.y = offsetY;
            this.drawing = true;
        }
    }

    /** 手指抬起事件注册
     * 标记绘制结束
     * 释放当前绘制实例
     */
    _regUpEvent = () => {
        this.deleting = false;
        if (this.drawing && !this.isDeleteMode) {
            this.drawing = false;
            this.currentGraph = null;
            this.points = [];
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }
            this._joinRecord(Array.from(this.svg.children));
        }
    }

    /** 手指在画布上滑动事件注册
     * 注意这个函数在手指滑动过程中会不断执行
     */
    _regMoveEvent = event => {
        let eventType = event.type;
        let offsetX = null;
        let offsetY = null;
        if (eventType === 'touchmove') {
            offsetX = event.touches[0].pageX - this.svg.getBoundingClientRect().left;
            offsetY = event.touches[0].pageY - this.svg.getBoundingClientRect().top;
        } else if (eventType === 'mousemove') {
            offsetX = event.offsetX;
            offsetY = event.offsetY;
        }

        offsetX = offsetX * this.ratioX;
        offsetY = offsetY * this.ratioY;

        if (this.isDeleteMode) {
            if (this.deleting) {
                // 擦除模式
                let target = this._gotNearTarget({ x: offsetX, y: offsetY, isMove: true });
                target && this._erase(target);
            }
        } else {
            this.offset.x = offsetX;
            this.offset.y = offsetY;
            if (this.drawing) {
            // 正在绘制
                if (this.onRaf) {
                    !this.animationFrame && (this.animationFrame = requestAnimationFrame(this._renderByReqAniFrame.bind(this)));
                } else {
                    this._draw();
                }
            }
        }
    }

    /** 使用requestAnimationFrame的方式渲染 */
    _renderByReqAniFrame (t) {
        // 存在递归，所以需要再判断
        if (this.drawing) {
            console.log('requestAnimationFrame刷新间隔：', `${t - this.initT}ms`);
            this.initT = t;

            requestAnimationFrame(this._renderByReqAniFrame.bind(this));
            if (!(this.offset.x - this.moveStart.x === 0 && this.offset.y - this.moveStart.y === 0)) {
                // 停止绘图但是未抬笔时不进行绘制
                this._draw();
            }
        }
    }

    /**
     * 绘制
     */
    _draw () {
        this.moveStart = {
            x: this.offset.x,
            y: this.offset.y,
        };
        if (this.shape === 'stright') {
            // 直线
            if (!this.currentGraph) {
                this.currentGraph = this._line();
            } else {
                this._fresh(this.currentGraph);
            }
        } else if (this.shape === 'curve') {
            // 曲线
            if (!this.currentGraph) {
                this.currentGraph = this._path();
            } else {
                this._fresh(this.currentGraph);
            }
        }
    }

    /**
     * @desc 绘制曲线初始点
     */
    _path () {
        let dStr = '';
        let id = this._generateId();
        dStr += ` M ${this.drawStart.x} ${this.drawStart.y}`;
        return this._fill('path', { d: dStr }, id);
    }

    /**
     * @desc path的追加绘制
     * @param {*} el 当前追加的图形元素
     */
    _pathSuppBez (el) {
        let mStr = `M ${this.drawStart.x} ${this.drawStart.y} `;
        let d = '';
        this.points.push(this.offset.x, this.offset.y);
        if (this.points.length >= 2) {
            d = mStr + this._solve(this.points);
            el.setAttribute('d', d);
        }
    }

    /**
     * @desc path的追加绘制(使用)
     * @param {*} el 当前追加的图形元素
     */
    _pathSuppNoBez (el) {
        let d = el.getAttribute('d');
        d += ` L${this.offset.x},${this.offset.y}`;
        el.setAttribute('d', d);
    }

    /**
     * @desc 绘制初始点的通用方法
     * 创建图形元素，append到svg中
     * @param {*} shape 需要绘制的图形
     * @param {*} attr 路径属性
     * @param {*} id 图形的属性
     */
    _fill (shape, attr, id) {
        let _shape = document.createElementNS('http://www.w3.org/2000/svg', shape);
        _shape.id = id;
        Object.keys(attr).forEach(k => {
            let v = attr[k];
            _shape.setAttribute(k, v);
        });
        _shape.setAttribute('fill', 'transparent');
        _shape.setAttribute('stroke', this.color);
        _shape.setAttribute('stroke-width', this.width);
        if (this.penStyle === 'pencil') {
            // 铅笔需要两边的圆角
            _shape.setAttribute('stroke-linecap', 'round');
        } else if (this.penStyle === 'highlighters') {
            // 荧光笔需要透明度,增加宽度至固定值
            _shape.setAttribute('stroke-opacity', this.opacity);
        }
        this.svg.appendChild(_shape);
        return _shape;
    }

    /**
     * @desc 通用追加绘制方法
     * @param {*} el 正在绘制的元素
     */
    _fresh (el) {
        if (this.shape === 'stright') {
            this._lineSupp(el);
        } else if (this.shape === 'curve') {
            if (this.onBezier) {
                this._pathSuppBez(el);
            } else {
                this._pathSuppNoBez(el);
            }
        }
    }

    /** 绘制直线的初始点
     * 初始点的x1=x2, y1=y2
     */
    _line () {
        const attr = {
            x1: this.drawStart.x,
            y1: this.drawStart.y,
            x2: this.drawStart.x,
            y2: this.drawStart.y,
        };
        const id = this._generateId();
        return this._fill('line', attr, id);
    }

    /**
     * @desc line的追加
     * 改变line的x2，y2属性
     * @param {*} el 正在绘制的元素
     */
    _lineSupp (el) {
        el.setAttribute('x2', this.offset.x);
        el.setAttribute('y2', this.offset.y);
    }

    /** 生成图形ID */
    _generateId () {
        return `yxp_prefix_svg_${this.iteId++}`;
    }

    /** 清空画板 */
    clear () {
        this._removeSvgContent();
        this.records = [[]];
        this.records[0]._pointer = true;
        this.graphAry = [];
        this.currentGraph = null;
        this.drawing = false;
        this.iteId = 0;
    }

    _removeSvgContent () {
        const svg = this.svg;
        while (svg.hasChildNodes()) {
            svg.removeChild(svg.firstChild);
        }
    }

    _erase (target) {
        this.svg.removeChild(target);
        let nextMirror = this.svg.children;
        this._joinRecord(Array.from(nextMirror));
    }

    /** 撤销 */
    revoke () {
        this._moveLeftPointer();
    }

    /** 恢复 */
    resume () {
        this._moveRightPointer();
    }

    /**
   * 将折线修改为圆滑曲线
   * @param {*} data  [x1,y1,x2,y2,x3,y3...] 长度必须大于4, 长度必须是偶数
   * @param {*} k 拟合系数, 数字
   */
    _solve (data, k = 1) {
        const size = data.length;
        const last = size - 4;
        let path = '';
        for (let i = 0; i < size - 2; i += 2) {
            const x0 = i ? data[i - 2] : data[0];
            const y0 = i ? data[i - 1] : data[1];
            const x1 = data[i + 0];
            const y1 = data[i + 1];
            // x2 和 y2 作为终点坐标
            const x2 = data[i + 2];
            const y2 = data[i + 3];
            const x3 = i !== last ? data[i + 4] : x2;
            const y3 = i !== last ? data[i + 5] : y2;
            // 计算控制点
            const cp1x = x1 + (x2 - x0) / 6 * k;
            const cp1y = y1 + (y2 - y0) / 6 * k;
            const cp2x = x2 - (x3 - x1) / 6 * k;
            const cp2y = y2 - (y3 - y1) / 6 * k;
            path += ` C${cp1x},${cp1y},${cp2x},${cp2y},${x2},${y2}`;
        }

        return path;
    }

    /** 加入历史纪录 */
    _joinRecord (mirror) {
        let records = this.records.slice();
        let pointerIdx = records.findIndex(e => e._pointer); // 指针索引
        // 加入历史时，总是丢弃指针后面的记录
        records = records.slice(0, pointerIdx + 1);
        // 画布上无图形，record全覆盖
        records.push(mirror);
        records.forEach((item, index, me) => {
            item._pointer = false;
            if (index === me.length - 1) { item._pointer = true; }
        });
        this._getGraphAryByRecord(mirror);
        this.records = records;
    }

    _moveRightPointer () {
        // 指针往前移动
        let records = this.records.slice();
        let maxIdx = records.length - 1;
        let pointerIdx = records.findIndex(e => e._pointer);
        // 当前最新
        if (pointerIdx < maxIdx) {
            // 指针在最大索引之前，可以进行"恢复"操作
            let currentMirror = records[pointerIdx + 1]; // 需要恢复的画布记录
            records[pointerIdx]._pointer = false;
            records[pointerIdx + 1]._pointer = true;
            this._redrawing(currentMirror);
            this._getGraphAryByRecord(currentMirror);
        }
    }

    _moveLeftPointer () {
        let records = this.records.slice();
        let pointerIdx = records.findIndex(e => e._pointer);
        // pointerIndex在第一位，不操作
        if (pointerIdx === 0) return;
        let currentMirror = records[pointerIdx - 1];
        records[pointerIdx]._pointer = false;
        records[pointerIdx - 1]._pointer = true;
        this._redrawing(currentMirror);
        this._getGraphAryByRecord(currentMirror);
    }

    _redrawing (mirror) {
        this._removeSvgContent();
        let fragment = document.createDocumentFragment();
        mirror.forEach(el => { fragment.appendChild(el); });
        this.svg.appendChild(fragment);
    }

    /** 判断浏览器是否为移动端 */
    _isMobile () {
        var userAgentInfo = navigator.userAgent;

        if (!!userAgentInfo.match(/AppleWebKit.*Mobile.*/) || !!userAgentInfo.match(/AppleWebKit/)) {
            var temp = userAgentInfo.toLowerCase();
            if (temp.indexOf('android') > -1 || temp.indexOf('iphone') > -1 ||
                temp.indexOf('ipad') > -1 || temp.indexOf('windows phone') > -1 ||
                temp.indexOf('blackberry') > -1 || temp.indexOf('hp-tablet') > -1 ||
                temp.indexOf('symbian') > -1 || temp.indexOf('phone') > -1
            ) {
                return true;
            }
        }

        return false;
    }

    /** 创建SVGPoint，用于判断点是否在stroke上 */
    _createSVGPoint (x, y) {
        let point = this.svg.createSVGPoint();
        point.x = x;
        point.y = y;
        return point;
    }

    /** 判断按压点是否在矩形内 */
    _isPointInRect ({ point, graph }) {
        let graphBox = graph.getBBox();
        let { x, y, width, height } = graphBox;
        // 允许的最小判断长度，width||height小于这个长度会强制增加到minLen
        // 如水平或垂直路径的情况，保证此Rect足够大到手指方便点击
        const minLen = 40;
        if (width < minLen) {
            x = x - minLen / 2;
            width = minLen;
        }
        if (height <= minLen) {
            y = y - minLen / 2;
            height = minLen;
        }
        let ax = x;
        let ay = y;
        let bx = x + width;
        let by = y + height;
        let [_x, _y] = point;
        return {
            value: (_x >= ax && _x <= bx) && (_y >= ay && _y <= by),
            pathX: graphBox.x,
            pathY: graphBox.y,
            pathWidth: graphBox.width,
            pathHeight: graphBox.height,
        };
    }

    /** 判断路径是否在整个矩形内 */
    _isPathInBox ({ path, box }) {
        let { pathX, pathY, pathWidth, pathHeight } = path;
        let { boxX, boxY, boxWidth, boxHeight } = box;
        return (pathX > boxX) && ((pathX + pathWidth) < (boxX + boxWidth)) && (pathY > boxY) && ((pathY + pathHeight) && (boxY + boxHeight));
    }

    /** 当前需要擦除的对象 */
    _gotNearTarget ({ x, y, isMove }) {
        let target = null;
        let graphs = [...Array.from(this.svg.children)].reverse();
        if (isMove) {
            // move事件，按照真实坐标进行擦除
            for (let i = 0, len = graphs.length; i < len; i++) {
                let graph = graphs[i];
                let _point = this._createSVGPoint(x, y);
                if (graph.isPointInStroke(_point)) {
                    target = graph;
                    break;
                }
            }
        } else {
            let step = 10;
            let startX = x - step;
            let endX = x + step;
            let startY = y - step;
            let endY = y + step;
            let rect = 2 * step + 1;
            // 虚拟矩形框组成的点
            let points = [];
            let b1 = []; let b2 = []; let b3 = []; let b4 = [];
            Array.from({ length: rect }).forEach((e, i) => {
                b1.push([startX + i, startY]);
                b2.push([endX, startY + i]);
                b3.push([startX + i, endY]);
                b4.push([startX, startY + i]);
            });
            points.push(...b1, ...b2, ...b3, ...b4);
            for (let i = 0, len = graphs.length; i < len; i++) {
                let graph = graphs[i]; // 遍历每根线条
                let strokeWidth = parseFloat(graph.getAttribute('stroke-width'));
                let { value, pathX, pathY, pathWidth, pathHeight } = this._isPointInRect({ point: [x, y], graph });
                if (!value) continue;
                if (strokeWidth >= 10) {
                    // 大线条，用实际坐标
                    if (graph.isPointInStroke(this._createSVGPoint(x, y))) {
                        target = graph;
                        break;
                    }
                } else {
                    // 小线条，用矩阵坐标遍历
                    let pathInBox = this._isPathInBox({
                        path: { pathX, pathY, pathWidth, pathHeight },
                        box: { boxX: startX, boxY: startY, boxWidth: rect, boxHeight: rect },
                    });
                    // 整个路径都在虚拟矩形框中，直接删除
                    if (pathInBox) {
                        target = graph;
                        break;
                    } else {
                        // 利用路径与虚拟矩形框点阵相交判断进行删除
                        for (let j = 0, _len = points.length; j < _len; j++) {
                            let [_x, _y] = points[j];
                            let _point = this._createSVGPoint(_x, _y);
                            if (graph.isPointInStroke(_point)) {
                                target = graph;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return target;
    }

    /** 根据历史记录得出当前数据模型 */
    _getGraphAryByRecord (mirror = []) {
        let graphAry = [];
        Array.from(mirror).forEach(el => {
            let graph = Object.create(null);
            let tagName = el.tagName.toLowerCase();
            graph.tag = tagName;
            Array.from(el.attributes).forEach(attr => {
                let k = attr.name;
                let v = attr.value;
                graph[k] = v;
            });
            graphAry.push(graph);
        });
        this.graphAry = graphAry;
    }

    /** 已有数据的回显 */
    render (data) {
        let fragment = document.createDocumentFragment();
        let maxId = 0;
        data.forEach(item => {
            let el = null;
            Object.entries(item).forEach(([k, v]) => {
                if (k === 'tag') {
                    el = document.createElementNS('http://www.w3.org/2000/svg', v);
                } else {
                    el.setAttribute(k, v);
                }

                if (k === 'id') {
                    maxId = parseInt(v) > maxId ? parseInt(v) : maxId;
                }
            });
            fragment.appendChild(el);
        });
        this.svg.appendChild(fragment);
        this.iteId = maxId + 1;
        this._joinRecord(Array.from(this.svg.children));
    }

    /** 动态改变画板大小，修复画笔触点坐标 */
    resize () {
        this._getViewData();
        this.svg.removeEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
        this.svg.addEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
    }
}
