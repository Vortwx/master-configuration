'use strict';

module.exports = (sequelize, DataTypes) => {
  const Spending = sequelize.define('Spending', {
    spending_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spending_amount: {
      type: DataTypes.DECIMAL(10, 2), // Adjusted to DECIMAL for precise monetary values
      allowNull: false
    },
    spending_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    spending_desc: {
      type: DataTypes.STRING,
      allowNull: true // Added allowNull for clarity
    }
  });
  return Spending;
};
