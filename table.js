var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'videoWikiTest'
    },
  })
knex.schema.createTable('edit_profile', (table) => {
    // table.integer('post_id'),
    // table.integer("user_id"),
    // table.boolean("likes"),
    // table.string("comments")
    table.integer("phone_number"),
    table.string("email_id"),
    table.string("birth_date"),
    table.string("education"),
    table.string("address"),
    table.string("bio")
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });