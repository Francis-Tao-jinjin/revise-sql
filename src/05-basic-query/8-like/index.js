const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from users`)
  .then(({ executeQuery }) => {
    return executeQuery(`SELECT * from users WHERE name LIKE 'Al%';`);
  })
  .then(({ result, executeQuery }) => {
    console.log('After Select Query with %');
    console.table(result);
    return executeQuery(`SELECT * FROM users WHERE name LIKE 'Al___';`);
  })
  .then(({ result, close }) => {
    console.log('After Select Query with _');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });