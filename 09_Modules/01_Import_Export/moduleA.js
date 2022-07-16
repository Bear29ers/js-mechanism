/* importとexport */
export let publicVal = 0;

export function publicFn() {
  console.log('publicFn called:');
}

// CommonJSでのexportの書き方
// exports.publicFn = function() {
//   console.log('publicFn called:');
// }

// デフォルトエクスポートは変数名がいらない
export default 1;
