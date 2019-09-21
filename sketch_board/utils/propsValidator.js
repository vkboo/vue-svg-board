
import { thicknessMap, penStyles, lines } from '../utils/config';
export const configValidator = value => {
    let flag = false;
    const shouldKeys = ['thickness', 'pen', 'line', 'color'];
    let keys = Object.keys(value);
    if ([...new Set(keys)].length === shouldKeys.length) {
        flag = !keys.map(itm => shouldKeys.includes(itm)).includes(false);
    }
    if (flag) {
        let bools = [];
        Object.entries(value).forEach(([k, v], index, en) => {
            switch (k) {
                case 'thickness': // 线粗度
                    bools.push(Object.keys(thicknessMap).includes(v));
                    break;
                case 'pen': // 笔形状
                    bools.push(penStyles.includes(v));
                    break;
                case 'line': // 线型
                    bools.push(lines.includes(v));
                    break;
                case 'color': // 线颜色
                    bools.push(typeof v === 'string');
                    break;
            }
        });
        flag = !bools.includes(false);
    }
    return flag;
};
