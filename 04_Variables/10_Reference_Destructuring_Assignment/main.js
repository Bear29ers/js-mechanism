/* 参照と分割代入 */
const a = {
  prop: 0
};

// 分割代入をする際はオブジェクトのプロパティ名と宣言する変数名は一致させる
let { prop } = a;
// let { prop: b } = a;  変数名を変更する記述方法

prop = 1;

console.log(a, prop);

// 関数を絡めた分割代入
function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

// 簡略化した分割代入の引数
function fn1({ prop }) {
  prop = 1;
  console.log(a, prop);
}

fn(a);
fn1(a);

// 高階層のオブジェクトの場合
const c = {
  prop1: {
    prop2: 0
  }
};

// prop2への参照が格納されるため、値の変更は大元のオブジェクトcにも影響する
let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;

console.log(c, prop1);
