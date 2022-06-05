/* アロー関数 */
function a(name) {
  return 'hello ' + name;
}

// 関数式
const b = function(name) {
  return 'hello ' + name;
}

// アロー関数
const c = name => 'hello ' + name;
console.log(c('Tom'));

// 引数が2つ以上だと括弧が省略できない
const d = (name, name1) => 'hello ' + name + ' ' + name1;
console.log(d('Tom', 'Bob'));
