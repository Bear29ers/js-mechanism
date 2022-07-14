/* for...ofと反復可能性 */
const arr = ['a', 'b', 'c'];

arr[4] = 'e';

// プロトタイプメソッドは反復の対象ではない
Object.prototype.method = function() {};

// enumerableの値は関係ない
Object.defineProperty(arr, 0, {
  enumerable: false
});

const d = Object.getOwnPropertyDescriptor(arr, 0);
console.log(d);

for (let v of arr) {
  console.log(v);
}
