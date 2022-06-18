/* hasOwnPropertyとin */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
};

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('name');
console.log(result);

// helloはprototypeの中にあるので、falseになる（自身のオブジェクトではないため）
const result2 = bob.hasOwnProperty('hello');
console.log(result2);

// in演算子でプロトタイプチェーンも遡って調べる
console.log('hello' in bob);
