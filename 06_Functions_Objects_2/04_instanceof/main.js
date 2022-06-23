/* instanceof */
function F(a, b) {
  this.a = a;
  this.b = b;
  // const result = new Object();
  // result.a = 1;
  return {a: 1};
}

F.prototype.c = function() {};

const instance = new F(1, 2);
console.log(instance instanceof F);
console.log(instance instanceof Object);
console.log(instance.__proto__ === F.prototype);
console.log(instance.__proto__ === Object.prototype);

// 引数に渡ってきた値がオブジェクトか配列かを判定する
function fn(arg) {
  if (arg instanceof Array) {
    arg.push('value');
  } else {
    arg['key'] = 'value';
  }
  console.log(arg);
}

fn({});
fn([]);
