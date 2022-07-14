/* 配列とループ文 */
const arr = [1, 2, 3, 4, 5];

// for文で配列の中身を出力させる
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while文を使って同じ処理を実現させる
let v, i = 0;
while (v = arr[i++]) {
  console.log(v);
}
