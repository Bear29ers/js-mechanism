/* AwaitとAsync */
function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  // awaitをつけた関数の実行が完了するまで次の処理に進まない
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // エラーを返すとcatchで受け取ることができる
  // throw new Error();
  return val;
}

init().then(function(val) {
  console.log('hello' + val);
}).catch(function(e) {
  console.error(e);
});
// console.log(init());

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// });
