/* WeakMap */
const wm = new WeakMap();

let o = {};
// setメソッドで値を設定する
wm.set(o, 'value1');

// o = null;
// o = {};
// getメソッドで値を取得する
console.log(wm.get(o));
// キーが存在するかどうか
console.log(wm.has(o));
// キーバリューを削除する
console.log(wm.delete(o));
