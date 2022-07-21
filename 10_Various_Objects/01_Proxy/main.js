/* Proxy */
const targetObj = { a: 0 };
const handler = {
  // トラップともいう
  // 値の変更を検知できる
  set: function(target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
    // 値を変更しようとするとエラーを投げることで、値の変更を防ぐことができる
    // throw new Error('cannot add prop.');
  },
  // getであれば値の取得が行われたときに検知する
  get: function(target, prop, receiver) {
    console.log(receiver);
    // プロパティが存在しない場合にデフォルト値を返す
    if (target.hasOwnProperty(prop)) {
      console.log(`[get]: ${prop}`);
      return target[prop];
    } else {
      return '-1';
    }
  },
  // 削除を検知する
  deleteProperty(target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  }
};

// Proxyを作成したインスタンスのオブジェクトがreceiverとして渡ってくる
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.a;
console.log(pxy.b);
delete pxy.a;
