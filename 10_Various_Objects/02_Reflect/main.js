/* Reflect */
class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
console.log(obj1);
// new演算子と同じことをしている
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);

// in演算子とReflect.hasは同じ意味
console.log('a' in obj1);
console.log(Reflect.has(obj1, 'b'));

// Objectの場合はtry-catch文などでエラーハンドリングを行う必要がある
// try {
//   Object.defineProperty;
// } catch {
//
// }

// Reflectの場合は処理に失敗するとfalseが返ってくるので、if文で対処できる
// if(Reflect.defineProperty) {
//
// } else {
//
// }

// Reflectでよく使用するgetとset
const bob = {
  name: 'Bob',
  _hello: function() {
    console.log(`hello ${this.name}`);
  }
};

const tom = {
  name: 'Tom',
  _hello: function() {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  }
};

tom.hello;
// 内部的にはReflect.getを読んでいることと同じ
// 第3引数にレシーバーとしてオブジェクトを束縛することができる（bindと同じ意味）→ 省略すると第1引数がセットされる
Reflect.get(tom, 'hello', bob);
