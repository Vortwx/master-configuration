// models/category.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Category;
};
