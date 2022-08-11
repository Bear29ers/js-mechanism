/* ReflectとProxy */
// Proxyに登録するためのターゲットオブジェクト
const targetObj = {
  a: 0,
  get value() {
    return this.b;
  }
};

// ハンドラー
const handler = {
  // getトラップ
  get: function(target, prop, receiver) {
    console.log(receiver);
    console.log(`[get]: ${prop}`);
    if (target.hasOwnProperty(prop)) {
      // return target[prop];
      // Reflectに書き換える
      return Reflect.get(target, prop, receiver);
    } else {
      return -1;
    }
  }
};

const pxy = new Proxy(targetObj, handler);
console.log(pxy.a);
console.log(pxy.b);
console.log(pxy.value);
