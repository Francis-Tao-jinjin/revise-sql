const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from transactions`)
  .then(({ executeQuery }) => {
    return executeQuery(`SELECT * from transactions WHERE note LIKE '%lunch%' LIMIT 3;`);
  })
  .then(({ result, close }) => {
    console.log('After Select Query with Limit 3');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });