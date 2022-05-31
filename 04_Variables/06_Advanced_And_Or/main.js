/* AND条件とOR条件（応用編） */
function hello(name) {
  // 引数がなかった場合の初期値を設定
  // if (!name) {
  //   name = 'Tom';
  // }
  // nameがtruthyならname、falsyならTomが入る
  name = name || 'Tom';
  console.log('Hello ' + name);
}

hello('Bob');
// 引数がないとundefinedになる
hello();

/*
ES6からだとデフォルト引数の構文が使える
function hello(name = 'Tom') {}
*/

let name = 'Bob';
if (name) {
  hello(name);
}

// nameがtruthyの場合に関数を実行する
name && hello(name);
