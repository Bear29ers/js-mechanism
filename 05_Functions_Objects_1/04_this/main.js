/* this */
const person = {
  name: 'Tom',
  hello: function() {
    // メソッド内でそのオブジェクトのプロパティを取得する場合はthisを使う
    console.log('Hello ' + this.name);
  }
};
person.hello();
