/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args)
  }

  print(label = '') {
    console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
    return this;
  }

  push(val) {
    super.push(val);
    return this;
  }

  forEach(callback) {
    for (let i=0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    let newInstance = new MyArray();
    for (let i=0; i < this.length; i++) {
      newInstance.push(callback(this[i], i, this));
    }
    return newInstance;
  }

  filter(predicate) {
    let newInstance = new MyArray();
    for (let i=0; i < this.length; i++) {
      if(predicate(this[i], i)) {
        newInstance.push(this[i]);
      }
    }
    return newInstance;
  }

  reduce(callback, accu) {
    const tmpArr = [...this];

    if (accu === undefined) {
      accu = tmpArr.shift();
    }
    for (let i=0; i < tmpArr.length; i++) {
      accu = callback(accu, tmpArr[i]);
    }
    return accu;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
.map(double)
.push(5)
.filter(function (v, i) {
  return v > 2;
})
.print('place1')
.reduce(function(accu, curr) {
  return accu + curr;
})

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);

