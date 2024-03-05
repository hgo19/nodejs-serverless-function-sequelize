'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'id',
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'username',
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'email',
    },
  });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');

  }
};
