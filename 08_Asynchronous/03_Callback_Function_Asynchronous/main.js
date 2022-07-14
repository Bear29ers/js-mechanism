/* コールバック関数と非同期処理 */
function a(b) {
  // コールスタックが空になるまでは実行が待機される（ミリ秒の設定がなくても）
  setTimeout(function task1() {
    console.log('task1 done');
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b);

// b();
