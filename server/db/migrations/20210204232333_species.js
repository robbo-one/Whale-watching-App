
exports.up = function(knex) {
    return knex.schema.createTable('species', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('url')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('species')
  
};
