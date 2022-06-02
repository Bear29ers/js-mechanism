/* falsyとtruthy */
let a = 0;
console.log(Boolean(a));

let b = '';
console.log(Boolean(b));

let c = 0n;
console.log(Boolean(c));

let d = null;
console.log(Boolean(d));

let e = undefined;
console.log(Boolean(e));
// 初期値を代入していないので、undefined
let f;
console.log(Boolean(f));

// Not a Number（数値ではない）
let g = NaN;
console.log(Boolean(g));
// 数値に変換できないため、NaNになる
let h = parseInt('');
console.log(h);

// falsyかどうかで実行する
if (!a) {
  console.log('hello');
} else {
  console.log('bye');
}
