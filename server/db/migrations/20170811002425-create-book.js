/* eslint-disable */

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            isbn: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            author: {
                type: Sequelize.STRING,
                allowNull: false
            },
            published: {
                type: Sequelize.DATE,
                allowNull: false
            },
            qty: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Books');
    }
};
