/* ダイナミックインポート */
import { publicVal, publicFn } from './moduleA.js';

publicFn();

// ダイナミックインポート
import('./moduleA.js').then(function(modules) {
  console.log(modules);
  modules.publicFn();
});

// async/awaitで書き換える
async function fn() {
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
