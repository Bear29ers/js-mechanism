let a = 2;  // let a = 1;もコメントアウトするとこちらのaが参照される
window.a = 4;  // グローバルスコープはスクリプトスコープよりも外側のスコープ
function fn1() {
  let a = 1;  // let a = 3;をコメントアウトするとこちらのaが参照される
  function fn2() {
    // let a = 3;
    // a = 3が出力される
    console.log(a);
  }
  fn2();
}
fn1();
