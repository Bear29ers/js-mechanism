/* 関数スコープとブロックスコープ */
function a() {
  let b = 0;
  console.log(b);
}
// 関数スコープ外なのでエラー
// console.log(b);
a();

if (true) {
  // ブロックスコープではletもしくはconstで宣言
  const c = 1;
  console.log(c);
  var d = 2;

  function e() {
    console.log('e is called');
  }

  // constで変数宣言を行なっているため、ブロックスコープ外からはアクセスできない
  const f = function() {
    console.log('f is called');
  }
}
// ブロックスコープ外なのでエラー
// console.log(c);
// var宣言はブロックスコープ外からもアクセスできる
console.log(d);
// 関数宣言もブロックスコープ外からもアクセスできる
e();
// f();
