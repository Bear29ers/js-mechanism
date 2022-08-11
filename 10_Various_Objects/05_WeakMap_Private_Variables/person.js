/* WeakMapとプライベート変数 */
const wm = new WeakMap();

export class Person {
  constructor(name) {
    // this._name = name;
    // wmはエクスポートされていないため、外部からアクセスできない（ファイル内でのみ参照可）
    wm.set(this, {name});
  }

  hello() {
    console.log(`hello ${wm.get(this).name}`);
  }
}

