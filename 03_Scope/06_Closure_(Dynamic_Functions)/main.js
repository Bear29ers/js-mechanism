/* クロージャー（動的な関数の生成）*/
function addNumberFactory(num) {
  function addNumber(value) {
    // レキシカルスコープの引数を参照する
    return num + value;
  }
  return addNumber;
}

// numは保持される
const add5 = addNumberFactory(5);
// 別の関数として定義される
const add10 = addNumberFactory(10);
const result = add5(10);
const result2 = add10(10);
console.log(result);
console.log(result2);
