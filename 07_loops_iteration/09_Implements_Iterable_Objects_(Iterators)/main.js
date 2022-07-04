/* 反復可能オブジェクトの実装 イテレータ編 */
const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
};

// オブジェクトのプロトタイプに対して、イテレータを返す関数を登録する
Object.prototype[Symbol.iterator] = function() {
  const keys = Object.keys(this);
  let i = 0;
  // 上の階層のthisの参照を変数に格納する
  let _this = this;
  return {
    next() {
      let key = keys[i++];
      return {
        value: [key, _this[key]],
        done: i > keys.length
      }
    }
  }
};

// const items = Object.entries(obj);
for (let [k, v] of items) {
  console.log(k, v);
}
