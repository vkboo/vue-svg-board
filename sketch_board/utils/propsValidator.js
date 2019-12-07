
import { thicknessMap, penStyles, lines, modes } from '../utils/config';
/**
 * @desc 验证config这个props的规则
 * 规则：必须将5个属性写全，每个属性的值也要正确
 * @param {Object} value props value
 * @return {Boolean} 是否通过验证
 */
export const configValidator = value => {
    let flag = false;
    const shouldKeys = ['thickness', 'pen', 'line', 'color', 'mode'];
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
                case 'mode':
                    bools.push(modes.includes(v));
            }
        });
        flag = !bools.includes(false);
    }
    return flag;
};
