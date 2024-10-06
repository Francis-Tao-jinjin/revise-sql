const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', `SELECT * from users`)
  .then(({ executeQuery }) => {
    return executeQuery(`
        SELECT name, username FROM users
          WHERE (username LIKE '%cashpal%' OR username LIKE '%support%') AND is_admin = false;
      `);
  })
  .then(({ result, close }) => {
    console.log('After Select Fraud users');
    console.table(result);
    return close();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });