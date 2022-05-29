/* 実行コンテキスト */
let a = 0;
function b() {
  console.log(arguments);  // argumentsが使用できる
  console.log(this);  // thisを使用できる
  console.log(a);  // 外部変数（関数bの外で宣言された変数）aを使用することができる
  // ここではsuperは使用できない
}

console.log(a);
b();
