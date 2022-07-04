/* ジェネレータ */
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

// イテレータを作成する
const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// genIteratorをジェネレータに書き換える
// function genIterator(max = 10) {
//   let i = 0;
//
//   return {
//     next: function() {
//       if(i >= max) {
//         return {
//           done: true
//         }
//       } else {
//         return {
//           done: false,
//           value: i++
//         }
//       }
//     }
//   }
// }

function* genIterator(max = 10) {
  let i = 0;
  while (i < max) {
    yield i++;
  }
  return i;
}

const it2 = genIterator();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

const obj = {
  [Symbol.iterator]: genIterator
};

for (let i of obj) {
  console.log(i);
}

// さらに省略した書き方
const obj2 = {
  *[Symbol.iterator](max = 10) {
    let i = 0;

    while (i < max) {
      yield i++;
    }
    return i;
  }
};
