import SketchBoard from './components/board.vue';
import SketchPopover from './components/sketchPopover.vue';
import ErasePopover from './components/erasePopover.vue';

const createHOCSketchBoard = options => ({
    data () {
        return {
            ...options,
        };
    },
    extends: SketchBoard,
});

export default {
    install (Vue, options = {}) {
        Vue.component(SketchBoard.name, createHOCSketchBoard(options));
        Vue.component(SketchPopover.name, SketchPopover);
        Vue.component(ErasePopover.name, ErasePopover);
    },
};
