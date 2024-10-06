const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from users`)
  .then(({ executeQuery }) => {

    return executeQuery(`SELECT name, age FROM users WHERE age BETWEEN 18 and 30`);
  })
  .then(({ result, executeQuery }) => {
    console.log('After Select Query');
    console.table(result);
    return executeQuery(`SELECT DISTINCT country_code FROM users`);
  })
  .then(({ result, close }) => {
    console.log('Distinct Country Codes:');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });