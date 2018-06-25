'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('TodoItems', {
     id: {
       type: Sequelize.INTEGER,
       autoIncrement: true
      },
      todoId: {
        type: Sequelize.INTEGER
       },
      content: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
       },
       completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
       },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updatedAt: {
         type: Sequelize.DATE,
         allowNull: false
        }
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  //  return queryInterface.dropTable('Todos');
  }
};
