/* イテレータとスプレッド構文 */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
console.log(arr2);
// スプレッド構文で新しい配列を作成しているので、別物になる
console.log(arr1 === arr2);
arr2.push(6);
console.log(arr1, arr2);

// 仮引数にレストパラメータを使用する
function sum(...args) {
  let ret = 0;
  for (let v of args) {
    ret += v;
  }
  return ret;
}

const result = sum(1, 2, 3, 4);
console.log(result);

// オブジェクトを配列に展開する
const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
};

Object.prototype[Symbol.iterator] = function*() {
  for (let key in this) {
    yield [key, this[key]];
  }
}

// Symbol.iteratorの挙動に従う
const arr3 = [...obj1];
console.log(arr3);

// オブジェクトリテラルだと別の挙動になる
const arr4 = {...obj1};
console.log(arr4);
