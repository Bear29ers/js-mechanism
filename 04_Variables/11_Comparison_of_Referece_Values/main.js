/* 参照の比較と値の比較 */
const a = {
  prop: 0
};

const b = {
  prop: 0
};
// オブジェクトの参照先を比較するので、false
console.log(a === b);

// プロパティの値を比較するので、true
console.log(a.prop === b.prop);

// aの参照先をcに代入するので、trueになる
const c = a;
console.log(a === c);
