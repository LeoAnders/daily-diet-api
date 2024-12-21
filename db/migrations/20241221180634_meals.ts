import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary();
    table.uuid('id').references('id').inTable('users').onDelete("CASCADE");
    table.string('name', 255).notNullable();
    table.text('description').nullable();
    table.timestamp('datetime').notNullable();
    table.boolean('is_on_diet').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}