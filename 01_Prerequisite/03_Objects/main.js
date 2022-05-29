/* 前提知識 - オブジェクト */
let obj = {
  prop1: 'value1',
  prop2: 'value2',
  // オブジェクトで関数（メソッド）を指定する場合は無名関数が一般的
  prop3: function() {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
}

console.log(obj.prop1);
obj.prop3();
console.log(obj.prop4.prop5);

// オブジェクトに値を追加する
obj.prop6 = 'value6';
console.log(obj['prop6']);

// オブジェクト自体を出力する
console.log(obj);
