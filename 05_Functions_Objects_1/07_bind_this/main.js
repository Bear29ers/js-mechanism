/* bindとthis */
window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
  }
};

person.hello();

// bindメソッドの引数に渡したオブジェクトを、実行するメソッドのthisの参照先として設定する
const helloTom = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloTom);

function a() {
  console.log('hello ' + this.name);
}

const b = a.bind({ name: 'Tim' });
b();

function c(name) {
  console.log('hello ' + name);
}

// bindメソッドで引数を束縛させる
const d = c.bind(null, 'Tim');
d('Tom');
