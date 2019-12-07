<template>
  <div>
    <div class="popover-wrap">
      <ul class="thickness">
        <li
          v-for="item of Object.keys(thicknessMap)"
          :key="item"
          :class="['point', item, config.thickness === item && 'on']"
          @click="_handle('thickness', item)"
        />
      </ul>
      <ul class="pen-line-style">
        <li
          v-for="item of penStyles"
          :key="item"
          :class="['item', item, item === config.pen && 'on']"
          @click="_handle('pen', item)"
        />
        <li
          v-for="item of lines"
          :key="item"
          :class="['item', item, item === config.line && 'on']"
          @click="_handle('line', item)"
        />
      </ul>
      <ul class="colors">
        <li
          v-for="item of colors"
          :key="item"
          :class="['item', item === config.color && 'on']"
          :style="{background: item}"
          @click="_handle('color', item)"
        /><li />
      </ul>
    </div>
  </div>
</template>

<script>
import { thicknessMap, penStyles, lines, colors } from '../utils/config';
import { configValidator } from '../utils/propsValidator';

export default {
    name: 'SketchPopover',
    props: {
        colors: { // 颜色集合
            type: Array,
            default: () => colors,
        },
        config: { // 选项框配置项
            type: Object,
            validator: configValidator,
            required: true,
        },
    },
    data () {
        return {
            thicknessMap,
            penStyles,
            lines,
        };
    },
    methods: {
        _handle (type, value) {
            this.$emit('update:config', Object.assign({}, this.config, {
                [type]: value,
                mode: 1, // 点击之后，肯定是绘制模式
            }));
        },
    },
};
</script>

<style lang="scss">
@import "../sass/reset.scss";
</style>
<style lang="scss" scoped>
$border-color: #f0f0f0;
$bg-urls-list: pencil highlighters curve stright;

$points-map: (
  small: 10px,
  middle: 16px,
  large: 22px,
);

.popover-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 270px;
  background: #ffffff;
  border-radius: 8px;
  padding: 0 30px;
  box-shadow: 3px 3px 3px 0 rgba(0,0,0,0.05);
  border: 2px solid $border-color;
  user-select: none;
}
.thickness {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  padding: 0 30px;
  border-bottom: 2px solid $border-color;
  & > .point {
    position: relative;
    border-radius: 50%;
    background-color: #cfdae2;
    &::after {
      content: ' ';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 44px;
      height: 44px;
      background-color: transparent;
    }
    cursor: pointer;
    &.on {
      background-color: #4d95fb;
    }
    $attr: small middle large;
    @each $item in $attr {
      &.#{$item} {
        width: map-get($points-map, $item);
        height: map-get($points-map, $item);
      }
    }
  }

}
.pen-line-style {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10;
  border-bottom: 2px solid $border-color;
  & > .item {
    width: 48px;
    height: 48px;
    cursor: pointer;
    @each $name in $bg-urls-list {
      &.#{$name} {
        background: url(../assets/#{$name}.png)
      }
      &.#{$name}.on {
        background: url(../assets/#{$name}-selected.png)
      }
    }
  }
}
.colors {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  & > .item {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    &.on {
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: ' ';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('../assets/color-selected.png') no-repeat;
      }
    }
  }
}
</style>
