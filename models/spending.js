const Spending = sequelize.define('Spending', {
    spending_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spending_amount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    spending_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    spending_desc: {
      type: Sequelize.STRING
    }
  });

  module.exports = Spending