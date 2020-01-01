module.exports = (sequelize, Datatypes) => {
  return sequelize.define("lists", {
    todo: Datatypes.STRING,
    completed: Datatypes.BOOLEAN
  });
};
