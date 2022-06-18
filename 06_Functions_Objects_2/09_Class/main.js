/* クラス */
class Person {
  // コンストラクタ関数と同じ役割
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

// インスタンス化
const bob = new Person('Bob', 23);
console.log(bob);
bob.hello();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// };
