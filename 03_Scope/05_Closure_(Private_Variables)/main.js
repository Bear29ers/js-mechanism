/* クロージャー（プライベート関数）*/
// グローバルコンテキストで定義する
let num = 0;
increment();  // 1
increment();  // 2
increment();  // 3

function increment() {
  // 毎回numを0で定義するため、ここで定義すると毎回結果が同じになる
  // let num = 0;
  num = num + 1;
  console.log(num);
}

// numはどこからでも変更できてしまう
num = 0;
// increment()を読んだ際に値が重複する
increment();
