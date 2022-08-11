/* 配列 Part.2 */
const arr = [1, 2, 3, 4, 5];
// 配列の要素一つずつに対して何らかの操作を行う
// コールバック関数の第一引数はインデックス、第二引数は要素、第三引数は配列自体が渡ってくる
arr.forEach(function(v, i, array) {
  console.log(v);
});

// 配列の要素一つずつに対して何らかの操作を行い、新しい配列を作る
const newArr = arr.map(function(v, i, arr) {
  return v * 2;
  // return arr;
});
console.log(newArr);

// 配列の要素で条件にマッチするもので新しい配列を作る
const filterArr = arr.filter(function(v, i, arr) {
  return i >= 1;
});

console.log(filterArr);
