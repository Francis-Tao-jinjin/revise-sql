const { executeSqlFile } = require('../../common/execute-sql');

const baseDir = __dirname;

executeSqlFile(baseDir, 'up.sql', 'SELECT * from transactions WHERE sender_id IS NULL');