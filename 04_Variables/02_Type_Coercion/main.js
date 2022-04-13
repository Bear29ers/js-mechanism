function printTypeAndValue(val) {
  console.log(typeof val, val);
}

let a = 0;
printTypeAndValue(a);

// 文字列が優先される
let b = '1' + a;
printTypeAndValue(b);

// 数値が優先される
let c = 15 - b;
printTypeAndValue(c);

// nullが数値の0と見なされる
let d = c - null
printTypeAndValue(d);

// trueが数値の1と見なされる
let e = d - true;
printTypeAndValue(e);

// 明示的に型を変換して計算
let f = parseInt('1') + e;
printTypeAndValue(f);
