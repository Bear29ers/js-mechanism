/* getter/setterとstatic */
function Person1(name, age) {
  this._name = name;
  this._age = age;
}

// コンストラクタ関数でのstaticメソッド
Person1.hello = function() {
  console.log('hello');
}
Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
  get: function() {
    return this._name;
  },
  set: function(val) {
    this._name = val;
  }
});

const p1 = new Person1('Bob', 23);
// getter経由でthis._nameを取得する
console.log(p1.name);

// setter経由でthis._nameを変更する
p1.name = 'Tom';
console.log(p1.name);

// ES6からは簡略化して記述できる
class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  // クラス内でのstaticメソッド
  static hello() {
    console.log('hello');
  }
}

const p2 = new Person2('Bob', 23);
Person2.hello();
