'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint no-unused-vars: ["error", { "args": "none" }] */

var model = function model(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        fullname: DataTypes.STRING,
        role: DataTypes.STRING,
        level: DataTypes.STRING
    });

    // Class Method
    User.associate = function (models) {
        User.hasMany(models.Inventory, { foreignKey: 'userId' });
    };

    return User;
};

exports.default = model;
//# sourceMappingURL=user.js.map