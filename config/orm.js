// import mysql connection
const connection = require("../config/connection");

// Exports object for all SQL queries
module.exports = {
  // Helper functions for sql syntax
  selectAll: (table, cb) => {
    const queryString = `SELECT * FROM \`${table}\``;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table, column, value, cb) => {
    const queryString = `INSERT INTO \`${table}\` (${column})
    VALUES (${value})`;
    connection.query(queryString);
    cb();
  },
  updateOne: () => {
    console.log("updateone");
  },
};
