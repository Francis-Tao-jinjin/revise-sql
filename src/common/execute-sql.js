const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();


function executeSqlFile(baseDir = __dirname, fileName, afterSQL) {

  const db = new sqlite3.Database(path.resolve(baseDir, 'db.sqlite'));

  const sqlFilePath = path.resolve(baseDir, fileName);
  const sql = fs.readFileSync(sqlFilePath, 'utf8');

  function close() {
    return new Promise((resolve) => {
      db.close(() => {
        console.log('Database connection closed');
        resolve();
      });
    });
  }

  function executeQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
      db.all(sqlQuery, (err, rows) => {
        if (err) {
          console.error('Error executing query:', err.message);
          reject(err);
        } else {
          resolve({
            result: rows,
            executeQuery,
            close,
          });
        }
      });
    });
  }

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Execute all SQL statements in the file
      db.exec(sql, (err) => {
        if (err) {
          const errMsg = `Error executing SQL file ${err}`;
          console.error(errMsg);
          db.close(() => {
            reject(errMsg);
          });
          return;
        }
        console.log('SQL file executed successfully');
        // If you need to get a specific result, add a separate query here
        // For example, to get the count of users:
        if (afterSQL) {

          executeQuery(afterSQL)
            .then(({ result }) => {
              console.table(result);
              resolve({
                result,
                executeQuery,
                close,
              });
            })
            .catch(reject);
        } else {
          resolve({
            executeQuery,
            close,
          });
        }
      });
    });
  });
}

module.exports.executeSqlFile = executeSqlFile;

// executeSqlFile('up.sql', 'crud');