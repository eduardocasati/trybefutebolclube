import { QueryInterface } from 'sequelize';

'use strict';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_name',
      },
    },
    {
      // timestamps: false,
    })
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropTable('teams');
  }
};