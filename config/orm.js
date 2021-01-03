// import mysql connection
const { query } = require("../config/connection");
const connection = require("../config/connection");

// Exports object for all SQL queries
module.exports = {
  // Helper functions for sql syntax
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM " + table;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // insertOne (String,Array,Array,Function)
  insertOne: (table, columns, values, cb) => {
    let queryString = "INSERT INTO " + table;
    queryString += " (" + columns.toString() + ")";
    queryString += " VALUES (?)";

    connection.query(queryString, values, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // updateone( String, Object, String, Function)
  updateOne: (table, colVal, condition, cb) => {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(colVal);
    queryString = +" WHERE ";
    queryString = +condition;

    console.log("queryString :>> ", queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

function objToSql(obj) {}
