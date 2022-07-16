/* importとexport */
import defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';
// 一度にすべてを読み込む
// import defaultVal, * as moduleA from './moduleA.js';

// console.log(moduleA);
console.log(val);
console.log(defaultVal);
// console.log(moduleA.default);
fn();
