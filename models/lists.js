module.exports = (sequelize, Datatypes) => {
  return sequelize.define("lists", {
    list_name: Datatypes.STRING
  });
};
