// Import the ORM
const orm = require("../config/orm");

const burger = {
  all(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  add(columns, values, cb) {
    orm.insertOne("burgers", columns, values, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  update(colVal, condition, cb) {
    orm.updateOne("burgers", colVal, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
