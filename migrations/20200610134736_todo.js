
exports.up = function(knex) {
    return knex.schema.createTable('todo', table => {
        table.increments('id').primary()
        table.string('task')
        table.string('description')
        table.integer('priority')
        table.boolean('completed')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable()
  
};
