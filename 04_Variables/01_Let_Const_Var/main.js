// let, constは再宣言できない
// let a = 0;
// let a = 0;

// varは再宣言できる、最後に宣言した値が上書きされる
var b = 0;
var b = 1;

// 再代入
let c = 0;
c = 1;

// constは再代入できない
// const d = 0;
// d = 1;

{
  let e = 0;
  // ブロックスコープは無視される
  var f = 0;
}

// ホイスティング
console.log(h);
let g = 0;
var h  = 0;
