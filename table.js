var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'videoWikiTest'
    },
  })
knex.schema.createTable('create_post', (table) => {
    table.increments('post_id'),
    table.integer("user_id"),
    table.string("post"),
    table.string("caption")
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });