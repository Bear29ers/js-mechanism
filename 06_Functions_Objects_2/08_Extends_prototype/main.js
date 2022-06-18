/* プロトタイプ継承 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
};

function Japanese(name, age, gender) {
  // コンストラクタ関数の継承
  Person.call(this, name, age);
  // Japaneseのコンストラクタのみプロパティを追加する
  this.gender = gender;
}

// Person.prototypeがJapanese.prototypeの中に含まれるprototypeになる
Japanese.prototype = Object.create(Person.prototype);

// prototypeのメソッドを上書きする（低い階層で同じメソッド名で定義し、優先される）
Japanese.prototype.hello = function() {
  console.log('Konnichiwa ' + this.name);
};

Japanese.prototype.bye = function() {
  console.log('Sayonara ' + this.name);
};

// Japaneseをインスタンス化する
const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();
taro.bye();
