const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', 'SELECT * from users')
  .then(({ executeQuery }) => {
    return executeQuery(`DELETE from users WHERE id = 2`);
  })
  .then(({ executeQuery }) => {
    console.log('After Delete');
    return executeQuery(`SELECT * from users`);
  })
  .then(({ result, close }) => {
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });