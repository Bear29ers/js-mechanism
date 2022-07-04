/* MapとSet */
// mapを作成する
const map = new Map();
const key1 = {};

map.set(key1, 'value1');
console.log(map.get(key1));

const key2 = function() {};
map.set(key2, 'value2');
console.log(map.get(key2));

let key3;
// キーのセット時に初期値代入しても問題ない
map.set(key3 = 0, 'value3');
console.log(map.get(key3));
// キーがプリミティブ型の場合は直接キーの値を指定しても、バリューを取得できる
console.log(map.get(0));

// mapから値を削除する
map.delete(key3);
console.log(map.get(key3));

// 配列でキーと値を取得する
for (const m of map) {
  console.log(m);
}

// 分割代入でキーバリューを取得する
for (const [k, v] of map) {
  console.log(k, v);
}

// Setをインスタンス化する
const s = new Set();
// Setの場合は値が重複しても1つしか扱われない
s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);
// 値を削除する
s.delete(key3);
// 値が含まれているかどうかを確認する
console.log(s.has(key2));
console.log(s.has(key3));

// Setを配列に変換する
const arr = Array.from(s);
console.log(arr);
// スプレッド構文でも配列に変換できる
const arr2 = [...s];
console.log(arr2);

for (let k of s) {
  console.log(k);
}
