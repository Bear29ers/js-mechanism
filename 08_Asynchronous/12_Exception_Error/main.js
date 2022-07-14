/* 例外処理とエラー */
// try {
//   console.log('start');
//   // すぐにcatchに処理が移る
//   throw new Error();
//   console.log('end');
// } catch(e) {
//   console.error(e);
// } finally {
//   console.log('bye');
// }

// fetchメソッドを使ってエラー処理を検証する
async function fetchUsers() {
  const response = await fetch('users.json');
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      // データがない場合はエラーを投げる
      // throw new NoDataError('no data found');
      throw new Error('no data found');
    }
    return json;
  }
}

// カスタムエラーの作成
class NoDataError extends Error {
  constructor(message) {
    super(message);
    // カスタムエラーの名前を設定する（設定しないとErrorになる）
    this.name = 'NoDataError';
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    // カスタムエラーのインスタンスを調べて分岐させる
    if (e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error('Oops, something went wrong');
    }
  } finally {
    console.log('bye');
  }
}

init();
