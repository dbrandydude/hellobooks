/* eslint no-unused-vars: ["error", { "args": "none" }] */

const model = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        fullname: DataTypes.STRING,
        role: DataTypes.STRING,
        level: DataTypes.STRING
    });

    // Class Method
    User.associate = (models) => {
        User.hasMany(models.Inventory, { foreignKey: 'userId' });
    };

    return User;
};

export default model;
