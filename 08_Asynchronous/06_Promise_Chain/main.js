/* Promiseチェーン */
function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  // コールバック関数の戻り値にPromiseインスタンスをセットしないと
  // 結果を待たずに次の処理が走ってしまう
  sleep(val);
  return val;
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
});

// アロー関数で書き換える
sleep(0).then(val => sleep(val)
).then(val => sleep(val)
).then(val => sleep(val));
