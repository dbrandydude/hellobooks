/* eslint no-unused-vars: ["error", { "args": "none" }] */

const model = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        isbn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
    Book.associate = (models) => {
        // associate
    };

    return Book;
};

export default model;
