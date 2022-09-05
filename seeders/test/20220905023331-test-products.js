'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   return await queryInterface.bulkInsert('Products', [
    {
      name: 'Guitar',
      price: 120,
      stock: 20,
      minStock: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Piano',
      price: 230,
      stock: 1,
      minStock: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Flute',
      price: 80,
      stock: 13,
      minStock: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
