let a = 2;
function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
    // bはアクセスできる
    console.log(b);
  }
  fn2();
}
fn1();

/*
グローバルスコープ - a, fn1
関数スコープ(fn1) - b, fn2
関数スコープ(fn2) - c
 */
