

/*var con = mysql.createConnection({
  host: 'localhost',
  user: 'mydb',
  password: 'root',

});*/




var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'mydb',
    password: 'root',
    debug: false,
    multipleStatements: true
});
connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});
connection.query('SELECT * from mydb_rest.users', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });

