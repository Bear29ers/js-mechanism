/* 参照とコピー */
// プリミティブ型
let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

// オブジェクト
let c = {
  prop: 'hello'
};
let d = c;
// dが新しいオブジェクトへの参照を保持する
d = {};
console.log(c, d);
