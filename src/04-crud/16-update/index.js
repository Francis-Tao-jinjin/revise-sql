const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from users`)
  .then(({ executeQuery }) => {
    return executeQuery(`UPDATE users SET is_admin = true WHERE name = 'Lane'`);
  })
  .then(({executeQuery }) => {
    console.log('After Update');
    return executeQuery(`SELECT * from users`);
  })
  .then(({ result, close }) => {
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });