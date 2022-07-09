/* MacrotasksとMicrotasks Part.1 */
// グローバルコンテキストが全て呼び出された後に実行される
setTimeout(function task1() {
  console.log('task1');
});

new Promise(function promise(resolve) {
  // 同期的に処理される
  console.log('promise');
  resolve();
}).then(function job1() {
  // 非同期処理なので、グローバルコンテキストの後に呼び出される
  console.log('job1');
});

// グローバルコンテキスト
console.log('global end');
