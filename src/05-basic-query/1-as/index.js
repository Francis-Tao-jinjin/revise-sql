const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from transactions`)
  .then(({ executeQuery }) => {
    return executeQuery(`SELECT amount, note AS birthday_message FROM transactions WHERE sender_id = 10`);
  })
  .then(({ result, close }) => {
    console.log('After Query');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });