/* ホイスティング */
// function（関数）宣言はホイスティングされる
a();

function a() {
  console.log(e);
  var e = 1;

  f();
  function f() {
    console.log('f is called');
  }

  console.log('a is called');
}

// var宣言はホイスティングされる
var b;
console.log(b);

b = 0;
console.log(b);

// let宣言はホイスティングされない
console.log(c);
let c = 0;

// const宣言はホイスティングされない
console.log(d);
const d = 0;

// 関数式はホイスティングされない
g();
const g = function() {
  console.log('Hello World');
}
