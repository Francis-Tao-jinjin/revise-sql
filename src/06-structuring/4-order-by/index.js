const { executeSqlFile, executeSqlQuery } = require('../../common/execute-sql');

const baseDir = __dirname;

// executeSqlFile(baseDir, 'up.sql', `SELECT * from transactions`)
//   .then(({ executeQuery }) => {
//     return executeQuery(`SELECT * from transactions WHERE note LIKE '%lunch%' LIMIT 3;`);
//   })
//   .then(({ result, close }) => {
//     console.log('After Select Query with Limit 3');
//     console.table(result);
//     return close();
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });

const dbParam = [baseDir, 'up.sql'];
function setUpTable() {
  return executeSqlFile(...dbParam);
}

// setUpTable();

executeSqlQuery(baseDir, `SELECT * from transactions WHERE amount BETWEEN 10 and 80 ORDER BY amount DESC;`)
.then(({ result, close }) => {
  console.log('After Select Query');
  console.table(result);
  return close();
});

