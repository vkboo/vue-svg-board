<template>
  <div id="app">
    <div class="sketch-wrap">
      <sketch-board
        class="sketch-board"
        :width="1024"
        :height="600"
        view-box="0 0 1024 600"
        :is-delete="board.deleteMode"
        :config="board.config"
        :opacity="0.8"
        :on-load="loadedSketch"
      />
    </div>
    <button
      :style="{position: 'fixed', bottom: 0}"
      @click="exportPng"
    >
      导出图片
    </button>
    |
    <button @click="page.showSketchTool = !page.showSketchTool;page.showErase = false;">
      {{ page.showSketchTool ? '隐藏' : '显示' }}画板选择框
    </button>
    |
    <button @click="page.showErase = !page.showErase;page.showSketchTool = false">
      {{ page.showErase ? '隐藏' : '显示' }}橡皮擦选择框
    </button>
    <div class="tools">
      <transition-group name="slightly">
        <sketch-popover
          v-show="page.showSketchTool"
          key="sketch"
          :config.sync="board.config"
          class="sketch-tool-board"
        />
        <erase-popover
          v-show="page.showErase"
          key="erase"
          class="erase-popover"
          @clear="clearSVG"
          @erase="handleErase"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            page: {
                showSketchTool: false,
                showErase: true,
            },
            board: {
                deleteMode: false,
                config: {
                    thickness: 'small',
                    pen: 'pencil',
                    line: 'curve',
                    color: '#000000',
                },
            },
        };
    },
    watch: {
        'page.showErase' (newVal) {
            this.board.deleteMode = newVal;
        },
    },
    mounted () {
    },
    methods: {
        exportPng () {
            this.sketch.toBase64()
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log('err>>>', err);
                });
        },
        clearSVG () {
            this.sketch.clear();
        },
        loadedSketch (sketch) {
            this.sketch = sketch;
        },
        handleErase () {
            let target = !this.board.deleteMode;
            this.board.deleteMode = target;
            console.log(`当前处于${target ? '擦除' : '画笔'}模式`);
        },
    },
};
</script>

<style lang="scss">
 body {
   background: rgb(240, 240, 240);
 }

.sketch-wrap {
  position: relative;
}

.sketch-board {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  background-color: pink;
}

.tools {
  position:fixed;
  bottom: 10px;
  display: flex;
  align-items: flex-end;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 动画
.slightly-enter-active {
  transition: all .2s ease;
}

.slightly-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slightly-enter, .slightly-leave-to {
  transform: translate3d(0, 15px, 0);
  opacity: 0;
}
</style>
