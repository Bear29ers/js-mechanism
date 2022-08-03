/* JSON */
const obj = { a: 0, b: 1, c: 2 };

function replacer(prop, value) {
  if (value < 1) {
    return;
  } else {
    return value;
  }
}

// 第2引数に関数を指定して、必要な値のみを取り出す操作が行える
const json = JSON.stringify(obj, replacer);
// 配列を指定しても必要な値を取り出せる
// const json = JSON.stringify(obj, ["a", "b"]);
console.log(json);
console.log(typeof json);

const obj2 = JSON.parse(json);
console.log(obj2);
