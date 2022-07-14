/* for...inと列挙可能性 */
const s = Symbol();
const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  // 配列をプロパティする記述
  [s]: 'value4'
};

// プロトタイプメソッドを列挙対象外に設定する
Object.prototype.method = function() {};
Object.defineProperty(Object.prototype, 'method', {
  enumerable: false
});

const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(d);
console.log(e);

// objのprop1を列挙対象から外す
// Object.defineProperty(obj, 'prop1', {
//   enumerable: false
// });

// for...inを使ったループ
for (let key in obj) {
  // hasOwnPropertyで自身のプロパティかを判定する
  // if (obj.hasOwnProperty(key)) {
  //   console.log(key, obj[key]);
  // }

  console.log(key, obj[key]);
}
