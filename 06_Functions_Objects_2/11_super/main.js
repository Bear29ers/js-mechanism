/* super */
class Person {
  // 関数コンテキストで実行されている
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

// クラスの継承
class Japanese extends Person {
  constructor(name, age, gender) {
    // 継承元のconstructorを呼び出す
    // thisキーワードより先に記述しなければエラーになる
    super(name, age);
    this.gender = gender;
  }

  hello() {
    // 継承元のhelloメソッドを呼び出す
    super.hello();
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

const taro = new Japanese('Taro', 23, 'Male');
taro.hello();
taro.bye();

// オブジェクトリテラルの中でsuperを使用する
const american = {
  hello() {
    console.log('hello ' + this.name);
  }
};

const bob = {
  name: 'Bob',
  hello() {
    super.hello();
    // console.log('hello ' + this.name);
  }
};

// 第一引数に指定したオブジェクトのprototypeに第二引数のオブジェクトを追加する
Object.setPrototypeOf(bob, american);
bob.hello();
