/* ループ文とブロックスコープ */
for (let i = 0; i < 5; i++) {
  const j = i * 2;
  setTimeout(() => console.log(j), 1000);
}

// varで宣言するとグローバルスコープで宣言しているのと同じ
for (let k = 0; k < 5; k++) {
  var l = k * 2;
  setTimeout(() => console.log(l), 1000);
}
