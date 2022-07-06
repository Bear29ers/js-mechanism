/* 非同期処理のチェーン */
function sleep(callback, val) {
  setTimeout(function() {
    console.log(val++);
    callback(val);
  }, 1000);
}

sleep(function(val) {
  sleep(function(val) {
    sleep(function(val) {
      sleep(function(val) {
        sleep(function(val) {
          sleep(function(val) {
            console.log('callback done');
          }, val);
        }, val);
      }, val);
    }, val);
  }, val);
}, 0);
