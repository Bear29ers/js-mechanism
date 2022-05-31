/* AND条件とOR条件 */
const a = 0;
const b = 1;
const c = 3;
const d = 0;
// falsyな値を取りに行く
console.log(a && b && c);  // 0
// truthyな値を取りに行く
console.log(a || b || c);  // 1
// 複数の条件が入って分かりずらい
console.log(a || b && c);  // 1
// グループ化
console.log((a || b) && c);  // 3
console.log((a || b) && (c || d));  // 3
