'use strict';
const fs = require('fs')
const songs = JSON.parse(fs.readFileSync('./songs.json', 'utf-8'))

module.exports = {
  up: (queryInterface, Sequelize) => {

    songs.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
    });
    return queryInterface.bulkInsert("Songs", songs, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Songs", null, {}) 
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
