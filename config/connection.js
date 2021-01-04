// Set up mysql connection
const mysql = require("mysql");

let connection;
// Set up for heroku deployment
try {
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "pathword",
      database: "burgers_db",
    });
  }
} catch (err) {
  console.log(err);
}

// make connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
});

// export connection for ORM to use
module.exports = connection;
