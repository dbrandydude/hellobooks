/* eslint no-unused-vars: ["error", { "args": "none" }] */

const model = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        isbn: DataTypes.INTEGER,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        published: DataTypes.DATE,
        qty: DataTypes.INTEGER
    });

    // Class Method
    Book.associate = (models) => {
        // associate
    };

    return Book;
};

export default model;
