'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('skus_variant_values', [
      { sku_id: 1, variant_value_id: 2 },
      { sku_id: 1, variant_value_id: 4 },
      { sku_id: 2, variant_value_id: 2 },
      { sku_id: 2, variant_value_id: 5 },
      { sku_id: 3, variant_value_id: 2 },
      { sku_id: 3, variant_value_id: 6 },
      { sku_id: 4, variant_value_id: 2 },
      { sku_id: 4, variant_value_id: 4 },
      { sku_id: 5, variant_value_id: 2 },
      { sku_id: 5, variant_value_id: 5 },
      { sku_id: 6, variant_value_id: 2 },
      { sku_id: 6, variant_value_id: 6 },
      { sku_id: 7, variant_value_id: 2 },
      { sku_id: 7, variant_value_id: 4 },
      { sku_id: 8, variant_value_id: 2 },
      { sku_id: 8, variant_value_id: 5 },
      { sku_id: 9, variant_value_id: 2 },
      { sku_id: 9, variant_value_id: 6 },
      { sku_id: 10, variant_value_id: 2 },
      { sku_id: 10, variant_value_id: 4 },
      { sku_id: 11, variant_value_id: 2 },
      { sku_id: 11, variant_value_id: 5 },
      { sku_id: 12, variant_value_id: 2 },
      { sku_id: 12, variant_value_id: 6 },
      { sku_id: 13, variant_value_id: 2 },
      { sku_id: 13, variant_value_id: 4 },
      { sku_id: 14, variant_value_id: 1 },
      { sku_id: 14, variant_value_id: 6 },
      { sku_id: 15, variant_value_id: 2 },
      { sku_id: 15, variant_value_id: 6 },
      { sku_id: 16, variant_value_id: 3 },
      { sku_id: 16, variant_value_id: 6 },
      { sku_id: 17, variant_value_id: 1 },
      { sku_id: 17, variant_value_id: 6 },
      { sku_id: 18, variant_value_id: 1 },
      { sku_id: 18, variant_value_id: 6 },
      { sku_id: 19, variant_value_id: 1 },
      { sku_id: 19, variant_value_id: 4 },
      { sku_id: 20, variant_value_id: 1 },
      { sku_id: 20, variant_value_id: 5 },
      { sku_id: 21, variant_value_id: 2 },
      { sku_id: 21, variant_value_id: 5 },
      { sku_id: 22, variant_value_id: 2 },
      { sku_id: 22, variant_value_id: 6 },
      { sku_id: 23, variant_value_id: 3 },
      { sku_id: 23, variant_value_id: 6 },
      { sku_id: 24, variant_value_id: 3 },
      { sku_id: 24, variant_value_id: 6 },
      { sku_id: 25, variant_value_id: 2 },
      { sku_id: 25, variant_value_id: 6 },
      { sku_id: 26, variant_value_id: 3 },
      { sku_id: 26, variant_value_id: 6 },
      { sku_id: 27, variant_value_id: 3 },
      { sku_id: 27, variant_value_id: 6 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skus_variant_values', null, {});
  }
};