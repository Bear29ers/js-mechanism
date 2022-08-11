/* 配列 Part.3 */
const arr = [1, 2, 3, 4, 5];

// 配列の要素一つずつにアクセスして値をまとめる
// コールバックの第一引数はaccumulator（累積の値）、第二引数はcurrentValue（配列の現在の要素）
// 第二引数を指定すると最初のループのaccuの初期値になり、ループで配列の要素がcurrに全て入ってくる
const result = arr.reduce(function(accu, curr) {
  console.log(accu, curr);
  return accu + curr * 2;
}, 0);
console.log(result);
