/* Promiseと並列処理 */
function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)]).then(function(data) {
  // resolveに渡した値が渡ってくる
  console.log(data);
}).catch(function(e) {
  console.error(e);
});
sleep(0).then(function(val) {
  return Promise.all([sleep(2), sleep(3), sleep(4)]);
}).then(function(val) {
  console.log(val);
  return sleep(val);
}).then(function(val) {
  return sleep(val);
});

// Promise.raceでどれかが完了したタイミングで次の処理に移行する
Promise.race([sleep(2), sleep(3), sleep(4)]).then(function(data) {
  console.log(data);
});

// Promise.allSettledは全ての処理が成功失敗に関わらず、全ての処理が終わって完了になる
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data) {
  console.log(data);
});
