module.exports = (sequelize, Datatypes) => {
  return sequelize.define("todos", {
    todo: Datatypes.STRING,
    completed: Datatypes.BOOLEAN
  });
};
