const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve(__dirname, 'db.sqlite'));

function executeSqlFile(fileName, tableName) {
  const sqlFilePath = path.resolve(__dirname, fileName);
  const sql = fs.readFileSync(sqlFilePath, 'utf8');

  db.serialize(() => {
    db.exec(sql, (err) => {
      if (err) {
        console.error('Error executing SQL', err);
      } else {
        console.log('SQL executed successfully');
      }

      db.each(`SELECT * FROM ${tableName}`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row);
      });
    });
  });
}

executeSqlFile('up.sql', 'crud');