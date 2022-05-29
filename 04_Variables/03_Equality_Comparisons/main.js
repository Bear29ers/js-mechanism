/* 厳格な等価性と抽象的な等価性 */
function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

let c = true;

console.log(b === Number(c));
printEquality(b, c);

let d = '';
let e = 0;
let f = '0';
printEquality(d, e);
printEquality(e, f);
