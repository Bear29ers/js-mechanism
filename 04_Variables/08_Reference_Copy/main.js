/* 参照とconst */
// プリミティブ型
const a = 'hello';
// a = 'bye';  // エラー

// オブジェクト
const b = {
  prop: 'hello'
};
// b = {};  // エラー
b.prop = 'bye';
console.log(b);
