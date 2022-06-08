/* 関数とオブジェクト */
function a() {
  console.log('Hello');
}

// 関数aはオブジェクトなので、プロパティやメソッドを追加できる
a.prop = 0;
a.method = function() {
  console.log('Method');
}

a();
a.method();
console.log(a.prop);
