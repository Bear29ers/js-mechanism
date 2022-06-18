/* プロトタイプチェーン */
function Person(name, age) {
  this.name = name;
  this.age = age;
  // 優先順位が一番高い
  this.hello = function() {
    console.log('OwnProperty: hello ' + this.name);
  };
}

// Person.prototype.hello = function() {
//   console.log('Person: hello ' + this.name);
// }

// prototypeを遡って検索される
Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();

// Object.prototypeのメソッドを使用する
const result = bob.hasOwnProperty('name');
console.log(result);
