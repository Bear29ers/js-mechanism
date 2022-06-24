/* 演算子と優先順位 */
let a = 1 + 2 * 3;
console.log(a);

let b = (1 + 2) * 3;
console.log(b);

let c = 0;
let d = c++;
let e = ++c;
console.log(c, d, e);

// インクリメントを分解する
let f = 0;
console.log(a);

let g;
// ++f
// f = g = 1;
// f++
f = (g = f) + 1
console.log(f, g);

function fn() {
  let a = 0;
  return a++;
}
// !0は1になる
console.log(!fn() * 5);
