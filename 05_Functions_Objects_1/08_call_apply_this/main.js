/* call, applyとthis */
function a(name, name1) {
  console.log('hello ' + name + ' ' + name1);
}

const tim = { name: 'Tim' };

const b = a.bind(tim);

b();

// applyの第二引数は配列で指定する
a.apply(tim, ['Tim', 'Bob']);
a.call(tim, 'Tim', 'Bob');

const array = [1, 2, 3, 4, 5];

const result = Math.max.apply(null, array);
const result2 = Math.max(...array);
console.log(result);
console.log(result2);
