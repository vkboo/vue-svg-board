<template>
  <div>
    <div class="erase-wrap">
      <div
        v-for="(item, index) of tools"
        :key="index"
        :class="['item', item.type === current && 'on']"
        @mousedown="_handleDown(item.type)"
        @touchstart="_handleDown(item.type)"
        @mouseup="_handleUp(item.type)"
        @touchend="_handleUp(item.type)"
      >
        <i :class="['icon', item.type]" />
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ErasePopover',
    data () {
        return {
            tools: [{
                type: 'erase',
                text: '擦除',
            }, {
                type: 'clear',
                text: '清屏',
            }],
            current: 'erase',
        };
    },
    methods: {
        _handleDown (type) {
            if (type === 'clear') {
                this.current = type;
            }
        },
        _handleUp (type) {
            this.$emit(type);
            this.current = 'erase';
        },
    },
};
</script>
<style lang="scss">
@import "../sass/reset.scss";
</style>
<style lang="scss" scoped>
$border-color: #f0f0f0;
.erase-wrap {
  box-sizing: border-box;
  width: 152px;
  height: 82px;
  padding: 13px 0;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  box-shadow: 3px 3px 3px 0 rgba(0,0,0,0.05);
  border: 2px solid $border-color;
  user-select: none;
  .item {
    display: flex;
    width: 56px;
    height: 56px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &.on {
      background: url(../assets/selectbackground.png);
    }
    .icon {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      top: 6px;
      width: 28px;
      height: 28px;
      @each $item in erase clear {
        &.#{$item} {
          background: url(../assets/#{$item}.png);
        }
      }
    }
    .text {
      display: inline-block;
      width: 56px;
      text-align: center;
      font-size: 12px;
      color: #666666;
      position: relative;
      bottom: 6px;
    }
  }
}
</style>
