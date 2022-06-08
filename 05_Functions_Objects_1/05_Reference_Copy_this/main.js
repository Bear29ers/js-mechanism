/* 参照コピーとthis */
window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
    a();
    const person = {
      name: 'Tim',
      hello: function() {
        console.log('Hello ' + this.name);
        a();
      }
    };
    person.hello();
  }
};

// メソッドを代入する
// const ref = person.hello;
// ref();

person.hello();

function a() {
  console.log('Hello ' + this.name);
}
