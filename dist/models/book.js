'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint no-unused-vars: ["error", { "args": "none" }] */

var model = function model(sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
        isbn: DataTypes.INTEGER,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        published: DataTypes.DATE,
        qty: DataTypes.INTEGER
    });

    // Class Method
    Book.associate = function (models) {
        // associate
    };

    return Book;
};

exports.default = model;
//# sourceMappingURL=book.js.map