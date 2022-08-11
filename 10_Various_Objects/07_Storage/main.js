/* Storage */
const obj = { a: 0 };
const json = JSON.stringify(obj);

// 値の保存
localStorage.setItem('key', json);
// localStorage.setItem('key2', '1');

// 値の取得
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);
console.log(result);
// console.log('end');

// 使用できるメソッドを確認する
console.log(localStorage);
