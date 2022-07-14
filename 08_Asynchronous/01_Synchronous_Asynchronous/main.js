/* 同期処理と非同期処理 */
function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

// メインスレッドを5秒間占有する
// sleep(5000);

// 2秒間メインスレッドが解放される
setTimeout(function() {
  sleep(3000);
}, 2000);
