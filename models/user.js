const User = sequelize.define('User', {
    user_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // email can be left empty
    // in MySQL each NULL are not equal to each other
    user_email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    }
})

module.exports = User
