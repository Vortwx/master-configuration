const Category = sequelize.define('Category', {
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category_description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

module.exports = Category