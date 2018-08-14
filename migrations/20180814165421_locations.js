
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function (table) {
    table.increments();
    table.string('city');
    table.string('key');
    table.decimal('latitude', 8, 3);
    table.decimal('longitude', 8, 3);
    table.string('mosquito_activity');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
