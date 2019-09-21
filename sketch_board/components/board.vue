<template>
  <svg
    ref="svg_ref"
    :class="[{ignore}, 'svg-borad']"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    @mousedown.once="_handleEvent('down')"
    @touchstart.once="_handleEvent('down')"
    @mouseup="_handleEvent('up')"
    @touchend="_handleEvent('up')"
  />
</template>

<script>
import SketchBoard from '../lib';
import { svgToBase64 } from '../utils/util';
import { thicknessMap, hThicknessMap } from '../utils/config';
import { configValidator } from '../utils/propsValidator';
export default {
    name: 'SketchBoard',
    props: {
        width: { // 画布width(px)
            type: Number,
            required: true,
        },
        height: { // 画布height(px)
            type: Number,
            required: true,
        },
        viewBox: { // 画布viewBox，当前产品默认值如下
            type: String,
            default: '0 0 1024 600',
        },
        ignore: { // 是否允许事件穿透
            type: Boolean,
            default: false,
        },
        opacity: { // 荧光笔的透明度
            type: Number,
            validator: value => value >= 0 && value <= 1,
            default: 0.3,
        },
        thicknessess: { // 硬笔-笔型粗细集合
            type: Array,
            validator: value => value.every(itm => typeof itm === 'string'),
            default: () => Object.values(thicknessMap),
        },
        hThicknessess: { // 荧光笔-笔型粗细集合
            type: Array,
            validator: value => value.every(itm => typeof itm === 'string'),
            default: () => Object.values(hThicknessMap),
        },
        isDelete: { // 是否为对象擦除模式
            type: Boolean,
            required: true,
        },
        config: { // 绘制属性的配置
            type: Object,
            validator: configValidator,
            required: true,
        },
        onLoad: { // 画板初始化完成-回调函数
            type: Function,
            default: () => {},
        },
        onUpEvent: { // 函数回调-操作画板的开始/结束时间信息
            type: Function,
            default: () => {},
        },
    },
    data () {
        return {
            bezier: false, // 开启贝塞尔曲线
            raf: false, // 开启requestAnimationFrame API
            sTime: null, // 开始操作画板的时间戳
            eTime: null, // 最后操作画板的时间戳
        };
    },
    computed: {
        // 当前笔的粗细值
        cp_thickness () {
            return this.cp_thickness_map[this.config.thickness];
        },
        // 笔粗细与的映射关系
        cp_thickness_map () {
            let _thicknessMap = Object.create(null);
            // 铅笔/荧光笔 小中大的粗线不一致
            let ts = this.config.pen === 'pencil' ? this.thicknessess : this.hThicknessess;
            Object.keys({ ...thicknessMap }).forEach((k, i) => {
                _thicknessMap[k] = ts[i];
            });
            return _thicknessMap;
        },
    },
    watch: {
        // watch画板各属性的变化，然后改变画板的属性表现
        'config': {
            deep: true,
            handler () {
                this._updateAttr();
            },
        },
        'isDelete' () {
            this._updateAttr();
        },
        // svg尺寸发生变化,重新计算绘制坐标
        'width'  (newVal) {
            this.$nextTick(this.resize);
        },
        // svg尺寸发生变化,重新计算绘制坐标
        'height'  (newVal) {
            this.$nextTick(this.resize);
        },
    },
    mounted () {
        // 需要等待确定尺寸之后，再取实例化
        this.$nextTick(this._instantSketch);
    },
    methods: {
        _instantSketch () {
            this.sketch = new SketchBoard(this.$refs.svg_ref, {
                width: this.cp_thickness,
                penStyle: this.config.pen,
                shape: this.config.line,
                color: this.config.color,
                onBezier: this.bezier,
                onRaf: this.raf,
            });
            this.sketch.opacity = this.opacity;
            this.onLoad(this);
        },
        /**
         * @desc 获取svg转化成base64
         */
        toBase64 () {
            return svgToBase64(this.$refs.svg_ref);
        },
        /**
         * @desc 更新画板/画笔的属性
         */
        _updateAttr () {
            this.sketch.width = this.cp_thickness;
            this.sketch.color = this.config.color;
            this.sketch.shape = this.config.line;
            this.sketch.penStyle = this.config.pen;
            this.sketch.isDeleteMode = this.isDelete;
        },
        /**
         * @desc 撤销
         */
        revoke () {
            this.sketch.revoke();
        },
        /**
         * @desc 恢复
         */
        resume () {
            this.sketch.resume();
        },
        /**
         * @desc 清除画板
         */
        clear () {
            this.sketch.clear();
        },
        /**
         * @desc 根据指定的svg数据格式进行回显
         * @param {Object} data
         */
        render (data) {
            this.sketch.render(data);
        },
        /**
         * @desc 动态改变画板大小，修复画笔触点坐标
         */
        resize () {
            this.sketch.resize();
        },
        _updateThickness (newVal) {
            Object.keys({ ...thicknessMap }).forEach((k, i) => {
                this.thicknessMap[k] = newVal[i];
            });
        },
        /**
         * @desc 处理放下/抬起事件，用于画板stime etime统计
         */
        _handleEvent (type) {
            if (type === 'down') {
                this.sTime = (new Date()).getTime();
            } else if (type === 'up') {
                this.eTime = (new Date()).getTime();
                this.onUpEvent({
                    sTime: this.sTime,
                    eTime: this.eTime,
                    time: this.eTime - this.sTime,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.svg-borad {
    display: block;
}
.ignore {
    pointer-events: none;
}
</style>
