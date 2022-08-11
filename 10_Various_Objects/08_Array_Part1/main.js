/* 配列 Part.1 */
const arr = [1, 2, 3, 4, 5];
// 配列の末尾に値を追加
arr.push(6);
// 配列の末尾の値を削除 - 削除された値が戻り値として返ってくる
const result = arr.pop();
console.log(arr);
console.log(result);

// 配列の先頭の値を削除 - 削除された値が戻り値として返ってくる
const result2 = arr.shift();
console.log(result2);

// 配列の先頭に値を追加 - 追加後の配列の長さが返ってくる
const length = arr.unshift(0);
console.log(arr);
console.log(length);

// 第一引数にしていたインデックス番号から、第二引数に指定した数だけ切り取る
// 第三引数以降は元の配列への代入を行う値をセットできる
const result3 = arr.splice(0, 3, 1, 2);
console.log(result3);
console.log(arr);

// 配列を結合する
const arr2 = arr.concat([6, 7, 8]);
console.log(arr2);

// ES6以降はスプレッド構文で配列の結合が可能
const arr3 = [0, ...arr2, 9, 10];
console.log(arr3);
