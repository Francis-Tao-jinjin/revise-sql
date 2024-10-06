const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from transactions`)
  .then(({ executeQuery }) => {
    return executeQuery(`SELECT * , IIF(was_successful = true, 'No action required', 'Perform an audit') AS audit FROM transactions`);
  })
  .then(({ result, close }) => {
    console.log('After Select Query');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });