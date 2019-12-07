<template>
  <div id="app">
    <div class="sketch-wrap">
      <sketch-board
        class="sketch-board"
        :width="board.width"
        :height="board.height"
        view-box="0 0 1024 600"
        :config="board.config"
        :opacity="0.2"
        :on-load="loadedSketch"
        :ignore="board.ignore"
        :on-up-event="handlePressUp"
      />
      <button
        class="btn-test"
        @click="handleStrike"
      >
        测试穿透
      </button>
    </div>
    <div class="buttons-wrap">
      <button
        @click="exportPng"
      >
        导出图片
      </button>
      |
      <button @click="board.ignore = !board.ignore">
        当前画板穿透状态： {{ board.ignore ? '开启' : '关闭' }}
      </button>
      |
      <button @click="changeBoardSize">
        切换画布大小
      </button>
      |
      <button @click="saveToLocal">
        存储当前svg矢量数据到localstorage
      </button>
      |
      <button @click="getFromLocal">
        读取数据到画布
      </button>
      |
      <button @click="sketch.revoke()">
        撤销
      </button>
      |
      <button @click="sketch.resume()">
        恢复
      </button>
    </div>
    <div class="tools">
      <sketch-popover
        key="sketch"
        :config.sync="board.config"
        class="sketch-tool-board"
      />
      <erase-popover
        key="erase"
        class="erase-popover"
        @clear="clearSVG"
        @erase="handleErase"
      />
    </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            board: {
                width: 1024,
                height: 600,
                config: {
                    thickness: 'small',
                    pen: 'pencil',
                    line: 'curve',
                    color: '#000000',
                    mode: 1,
                },
                ignore: false,
            },
        };
    },
    methods: {
        handleStrike () {
            window.alert('click!');
        },
        changeBoardSize () {
            const oldWidth = this.board.width;
            const oldHeight = this.board.height;

            Object.assign(this.board, {
                width: oldWidth === 512 ? 1024 : 512,
                height: oldHeight === 300 ? 600 : 300,
            });
            // this.sketch.resize();
        },
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
            console.log('--- 画板初始化回调start: 因为插件内部需要确定尺寸后，才会初始化，这是一个异步的过程，所以抛出一个方法，用户获取画板vue对象 ---');
            console.log(sketch);
            console.log('--- 画板初始化回调end ---');
            this.sketch = sketch;
        },
        handlePressUp (params) {
            console.log('--- start: 手势抬起，用于回调操作画板的开始/结束时间信息数据 ---');
            console.log(params);
            console.log('--- end ---');
        },
        handleErase () {
            this.board.config.mode = 0;
        },
        saveToLocal () {
            localStorage.setItem('yxp-svg-data', JSON.stringify(this.sketch.getData()));
        },
        getFromLocal () {
            let localData = localStorage.getItem('yxp-svg-data');
            if (localData) {
                const data = JSON.parse(localData);
                this.sketch.clear();
                this.sketch.render(data);
            }
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
  position: relative;
  z-index: 1;
  margin: auto;
  background-color: #ffc0cb6b;
}

.tools {
  position:fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  z-index: 2;
  justify-content: space-around;
  align-items: flex-end;
}

.btn-test {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
