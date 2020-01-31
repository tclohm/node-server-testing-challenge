
exports.up = function(knex) {
  return knex.schema.createTable('ventures', tbl => {
  	tbl.increments();
  	tbl.string('name').notNullable().unique();
  	tbl.integer('fund_amount').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ventures');
};
