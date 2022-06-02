/* 即時関数 */
function a() {
  console.log('called');
}
a();

// 即時関数に書き直す
(function() {
  console.log('called');
})();

// グループ化と関数呼び出し
(a)();

// グループ化演算子
let b = (1 + 2) * 3;
console.log(b);

// 戻り値は呼び出し元に返る
let c = (function(d) {
  console.log('called ' + d);
  // 即時関数の実行時に一度だけ初期化される
  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }

  function publicFn() {
    // レキシカルスコープで参照する
    console.log('publicFn is called: ' + privateVal++);
  }

  return {
    publicVal,
    publicFn
  };
})(10);

// 関数スコープの外側から呼び出すことができる
c.publicFn();
c.publicFn();
c.publicFn();
console.log(c.publicVal);
console.log(c);
