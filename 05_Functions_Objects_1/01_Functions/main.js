/* 関数 */
// 関数呼び出しの際の実引数を省略できる
function fn(a, b, c) {
  console.log(a, b, c);
}

fn(1, 2);

// 関数名が重複してもエラーにならない
function fn2(name) {
  console.log('Hello' + name);
}

function fn2() {
  console.log('Hello World');
}

fn2('Taro');

// 引数の個数は関数が異なる理由にならない
function fn3(a, b, c) {
  console.log(a, b, c);
}

function fn3() {
  console.log('Hello World');
}

fn3(1, 2, 3);

// 関数式の場合は、関数名の重複でエラーになる
const fn4 = function (a, b, c) {
  console.log(a, b, c);
};

// function fn4() {
//   console.log('Hello World');
// }

fn4(1, 2, 3);

// 引数には初期値を設定できる（ES6以降）
function fn5(name = 'World') {
  console.log('Hello' + name);
}

fn5('Taro');
fn5();

// 戻り値を定義しない場合はundefinedが返る
function fn6() {
  return;
}
console.log(fn6());

function fn7() {
  // return文を省略
}
console.log(fn7());
