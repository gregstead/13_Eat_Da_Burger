// Import the ORM
const orm = require("../config/orm");

class Burger {
  constructor(name) {
    this.id, (this.name = name);
  }

  all(cb) {
    orm.selectAll("burgers", (res) => {
      console.log(res);
    });
  }
}

const burger = new Burger("ham");

burger.all();
