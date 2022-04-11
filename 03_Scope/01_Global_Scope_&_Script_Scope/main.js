let a = 0;
var b = 0;
function c() {}

console.log(window.b);// Developer Toolを開いていると、この行で処理が停止する

// Windowオブジェクトはグローバルスコープになっている
window.d = 1;
// こちらの定義が優先される（スコープチェーン）
let d = 2;
console.log(d);
