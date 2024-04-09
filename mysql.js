var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'phankieuphu',
  password : 'phankieuphu123',
  database : 'nestdemo',
  port:3306
});
 

module.exports = connection;
