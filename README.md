# vue-svg-board 

SVG画板插件,可以画直线/曲线，切换硬笔/荧光笔, 变换笔颜色，调整线宽，橡皮檫擦除。自适应svg大小，等比例适应不同屏幕。

## Demo
```
npm install
npm run serve
```

### 功能
* 绘制直线/曲线
* 改变画笔颜色
* 改变画笔粗细
* 绘制硬笔/荧光笔
* 对象擦除
* 画板转化为png:base84
* ...etc

### 加载技术栈

```
npm install Vue vue-svg-board
```


### 使用
```html
<template>
  <div id="app">
    <sketch-board
      ref="sketch_ref"
      :width="1000"
      :height="600"
      :is-delete="board.deleteMode"
      :config="board.config"
      :opacity="0.8"
      :on-load="loadedSketch"
    />
    <div class="tools">
        <sketch-popover
          :config.sync="board.config"
          class="sketch-tool-board"
        />
        <erase-popover
          @clear="clearSVG"
          @erase="board.deleteMode = true"
        />
    </div>
  </div>
</template>

<script>
import SketchBoard from 'vue-svg-board';
Vue.use(SketchBoard);

export default {
    name: 'App',
    data () {
        return {
            board: {
                deleteMode: false,
                config: {
                    thickness: 'middle',
                    pen: 'pencil',
                    line: 'curve',
                    color: '#000000',
                },
            },
        };
    },
    mounted () {
        this.sketch = this.$refs.sketch_ref;
    },
    methods: {
        loadedSketch (sketch) {
          this.sketch = sketch;
        },
        clearSVG () {
            this.sketch.clear();
        },
    },
};
</script>
```

### 全局配置
可全局配置是否开启贝塞尔曲线和requestAnimationFrame API，默认全部关闭，按照以下操作，即可全部开启。
``` Javascript

import Vue from 'vue';
import SketchBoard from 'vue-svg-board';
Vue.use(SketchBoard, {
    bezier: true, // 开启贝塞尔曲线
    ref: true, // 开启requestAnimationFrame API
})
```



### SketchBoard Attribute
参数      | 说明  | 类型 | 可选值 | 默认值 | 是否必填
------------- | -------- | --------------- | ----------- | --------- | ------
`width`     | 画布宽度(px)  | `Number`   | - | - | 是
`height`     | 画布高度(px)  | `Number`   | - | - | 是
`viewBox`     | 画布viewBox  | `Stinrg`   | - | `'0 0 1000 600'` | 否
`ignore`     | 允许事件穿透  | `Boolean`   | `true, false` | `false` | 否
`opacity`     | 荧光笔的透明度  | `Number`   | `0-1` | `0.3` | 否
`thicknessess`     | 铅笔的3中粗细集合  | `Array<String>[]`   | - | `['2px', '4px', '8px']` | 否
`h—thicknessess`     | 荧光笔的3中粗细集合  | `Array<String>[]`   | - | `['4px', '8px', '16px']` | 否
`is-delete`     | 是否为对象擦除模式  | `Boolean`   | `true, false` | `true` | 否
`config.thickness`     | 线粗度  | `String`   | `small, middle, large` | - | 是
`config.pen`     | 笔形状  | `String`   | `pencil, highlighters` | - | 是
`config.line`     | 线型  | `String`   | `curve, stright` | - | 是
`config.color`     | 线颜色  | `String`   | (从给sketchColors中选一种颜色，如果没有配置，则是`#000000, #ff1000, #326ed9, #ffc510, #306c00, #ff1ecf`) | - | 是
`on-load`     | 画板初始化完成  | `Function(sketchVm)`   | - | - | 否
`on-up-event`     | 手势抬起，用于回调操作画板的开始/结束时间信息数据  | `Function(Object)`   | - | - | 否

### SketchBoard Methods
方法名      | 说明  | 参数 | 返回值
------------- | -------- | --------------- | ---------
`toBase64`     | svg转化成base64  | - | `Promise`
`revoke`     | 撤销操作(暂时没用到)  | - | -
`resume`     | 恢复操作(暂时没用到)  | - | -
`clear`     | 清除画板  | - | -
`render`     | 根据指定的svg数据格式进行回显(暂时没用到)  | data | -
`resize`     | 动态改变画板大小，修复画笔触点坐标  | - | -

---

### SketchPopover Attribute
参数      | 说明  | 类型 | 可选值 | 默认值 | 是否必填
------------- | -------- | --------------- | ----------- | --------- | -------
`colors`     | 颜色集合  | `Array<String>[]`   | - | `['#000000', '#ff1000', '#326ed9', '#ffc510', '#306c00', '#ff1ecf']` | 否
`config.thickness`     | 线粗度(支持`.sync`修饰符)  | `String`   | - | - | 是
`config.pen`     | 笔形状(支持`.sync`修饰符)  | `String`   | - | - | 是
`config.line`     | 线型(支持`.sync`修饰符)  | `String`   | - | - | 是
`config.color`     | 线颜色(支持`.sync`修饰符)  | `String`   | - | - | 是

### SketchPopover Events
事件名      | 说明  | 参数
------------- | -------- | ---------------
`thickness`     | 改变线粗度  | 改变后的值
`pen`     | 改变笔形状  | 改变后的值
`line`     | 改变线型  | 改变后的值
`color`     | 改变线颜色  | 改变后的值


---

### EarsePopover Events
事件名      | 说明  | 参数
------------- | -------- | ---------------
`erase`     | 点击了`擦除`  | -
`clear`     | 点击了`清屏`  | -

---

### Change Log

#### 1.0.0
* 铅笔与荧光笔单独配置粗线程度
* UI小改动：工具栏框线统一、去掉选装顶部高亮等
* 荧光笔下粗线改动
* 优化细线的擦除

