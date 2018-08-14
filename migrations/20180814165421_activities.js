
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments();
    table.string('key');
    table.string('city');
    table.decimal('value');
    table.string('category');
    table.decimal('categoryValue');
    table.string('mobileLink');
    table.decimal('latitude', 8, 3);
    table.decimal('longitude', 8, 3);
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities');
};
