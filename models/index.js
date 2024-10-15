'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//------------------------------
//         Relationship
//------------------------------
// User to Spending is 1-to-Many
// Enable find spending by user
// Cannot find user of the spending (require belongsTo)
db.User.hasMany(db.Spending, {
  foreignKey: 'user_id',
  as: 'spendings'
})

db.Spending.belongsTo(db.User, {
  foreignKey: 'user_id',
  as: 'user'
})

db.Spending.hasOne(db.Category, {
  foreignKey: 'spending_id', as: 'category'
})

db.Category.belongsTo(db.Spending, {
  foreignKey: 'spending_id', as: 'spending'
})


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
