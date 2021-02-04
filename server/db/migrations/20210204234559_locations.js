
exports.up = function(knex) {
    return knex.schema.createTable('locations', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('latLong')
        table.string('url')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations') 
};
