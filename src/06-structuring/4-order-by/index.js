const { executeSqlFile, executeSqlQuery } = require('../../common/execute-sql');

const baseDir = __dirname;

const dbParam = [baseDir, 'up.sql'];
function setUpTable() {
  return executeSqlFile(...dbParam);
}

// setUpTable();

// When using both ORDER BY and LIMIT, the ORDER BY clause must come first.
// For example, the following query will return the top 4 transactions with the highest amount between 10 and 80:
// SELECT * FROM transactions
// WHERE amount BETWEEN 10 AND 80
// ORDER BY amount DESC
// LIMIT 4;

executeSqlQuery(baseDir, `SELECT * from transactions WHERE amount BETWEEN 10 and 80 ORDER BY amount DESC;`)
.then(({ result, close }) => {
  console.log('After Select Query');
  console.table(result);
  return close();
});


// Exercise
// write a query that returns the recipient's ID along with the 
// transaction amount and note. Return this information for the
// top 5 largest successful transactions ordered from highest to lowest.

// SELECT ID, amount, note from transactions WHERE was_successful is true ORDER BY amount DESC LIMIT 5;
// SELECT ID, amount, note from transactions WHERE was_successful = true ORDER BY amount DESC LIMIT 5;
