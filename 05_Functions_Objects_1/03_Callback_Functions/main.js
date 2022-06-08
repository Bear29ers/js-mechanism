/* コールバック関数 */
function hello(name) {
  console.log('hello ' + name);
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  // 関数内部で引数を実行する
  cb('Tom');
}

// 関数の引数に関数を渡す
fn(hello);
fn(bye);
fn(function(name) {
  console.log('hello ' + name);
});

// setTimeoutは第一引数にコールバック関数を取る
setTimeout(hello, 2000);
