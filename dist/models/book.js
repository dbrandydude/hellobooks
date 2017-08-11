'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint no-unused-vars: ["error", { "args": "none" }] */

var model = function model(sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
        isbn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        published: {
            type: DataTypes.DATE,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Class Method
    Book.associate = function (models) {
        // associate
    };

    return Book;
};

exports.default = model;
//# sourceMappingURL=book.js.map