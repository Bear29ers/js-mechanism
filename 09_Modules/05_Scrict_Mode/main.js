/* Strictモード */
// 'use strict';
// a = 0;

function fn() {
  // 関数内の先頭での記述も可
  'use strict';
  // b = 0;
  // 将来使用されるかもしれない予約語を変数・関数名に使用するとエラーになる
  // const implements, interface, package;
  return this;
}

// console.log(a);
console.log(fn());
console.log(fn.call(2));
// fn();
