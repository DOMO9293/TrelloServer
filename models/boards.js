module.exports = (sequelize, Datatypes) => {
  return sequelize.define("boards", {
    board_name: Datatypes.STRING
  });
};
