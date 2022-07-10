/* MacrotasksとMicrotasks Part.2 */
new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });
}).then(function job1() {
  console.log('job1');
  // Macrotasksがジョブキューに入り、最後に実行される
  setTimeout(function task2() {
    console.log('task2');

    // queueMicrotaskと同じ意味
    const p = Promise.resolve();
    p.then(function job4() {
      console.log('job4');
    });

    // Microtasksに追加する
    queueMicrotask(function job4() {
      console.log('job4');
    });
  });

}).then(function job2() {
  console.log('job2');
}).then(function job3() {
  console.log('job3');
});

console.log('global end');
