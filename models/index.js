const Sequelize = require("sequelize");
const sequelize = new Sequelize("trello", "root", "1234", {
  host: "localhost",
  dialect: "mysql"
});
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./users")(sequelize, Sequelize);
db.Board = require("./boards")(sequelize, Sequelize);
db.List = require("./lists")(sequelize, Sequelize);
db.Todo = require("./todos")(sequelize, Sequelize);

db.User.hasMany(db.Board);
db.Board.belongsTo(db.User);

db.Board.hasMany(db.List);
db.List.belongsTo(db.Board);

db.User.hasMany(db.List);
db.List.belongsTo(db.User);

db.List.hasMany(db.Todo);
db.Todo.belongsTo(db.List);

module.exports = db;
