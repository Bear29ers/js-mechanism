/* ES Modulesと即時関数 */
console.log('ES Modules called');

let privateVal = 1;
export let publicVal = { prop: 10 };

export function publicFn() {
  console.log('publicFn called: ' + publicVal.prop);
}

function privateFn() {

}
