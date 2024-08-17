const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', 'SELECT COUNT(*) FROM users')
  .then(({ result, executeQuery }) => {
    console.log('Initial query result:', result);
    return executeQuery('SELECT name FROM users');
  })
  .then(({ result, executeQuery }) => {
    console.table(result);
    return executeQuery('SELECT username FROM users WHERE is_admin = true');
  })
  .then(({ result, close }) => {
    console.table(result);
    close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
  
