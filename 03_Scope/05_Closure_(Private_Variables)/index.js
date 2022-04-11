function incrementFactory() {
  // numの初期化はincrementFactoryが実行された時のみ
  let num = 0;

  // 関数スコープ内なので、numを参照可能
  function increment() {
    num = num + 1;
    console.log(num);
  }

  // JavaScriptでは関数自体も戻り値として使える
  return increment;
}

// 関数スコープ外からのアクセスはエラー
// console.log(num);

// 中身は関数
const increment = incrementFactory();

increment();
increment();
increment();
increment();
