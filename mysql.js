var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test_user',
  password : 'phankieuphu',
  database : 'testsql',
  port:3306
});
 

module.exports = connection;
