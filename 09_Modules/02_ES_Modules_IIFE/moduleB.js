/* ES Modulesと即時関数 */
import { publicFn as fn, publicVal as val} from './moduleA.js';

fn();
fn();
fn();
// moduleAのpublicValは直接変更できないため、エラーになる
// propを操作する（）
console.log(val.prop++);
console.log(val.prop++);
fn();
