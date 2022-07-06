/* Promise */
new Promise(function(resolve, reject) {
  console.log('promise');
  // resolve('hello');
  // reject('bye');
  setTimeout(function() {
    resolve('hello');
  }, 1000);
}).then(function(data) {
  console.log('then:' + data);
  // catchに処理を移行させる
  // throw new Error();
  return data;
}).then(function(data) {
  console.log('then:' + data);
}).catch(function(data) {
  console.log('catch:' + data);
  // finallyのコールバックには引数は渡せない
}).finally(function() {
  console.log('finally');
});

console.log('global end');
