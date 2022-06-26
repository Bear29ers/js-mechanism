/* イテレータ */
function genIterator(max = 10) {
  let i = 0;

  // イテレータ
  return {
    next: function() {
      if (i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

// Symbolのイテレータに追加して反復可能オブジェクトを作成する
const obj = {
  [Symbol.iterator]: genIterator.bind(null, 10)
};

// 上限値を初期値として設定しないと無限ループになる
for (const i of obj) {
  console.log(i);
}

// Setのインスタンス化の際に反復可能オブジェクトを渡して初期化する
const s = new Set(obj);
console.log(s);
