const md5 = require('md5')

exports.seed = function(knex, Promise) {
  return knex('urls').del()
  .then(() => {
    return Promise.all([
      knex('urls').insert({
        id: md5('url1'),
        url: "http://google.com",
        count: 3,
        folder_id: md5('folder1'),
        created_at: new Date
      }),
      knex('urls').insert({
        id: md5('url2'),
        url: "http://the.com",
        count: 5,
        folder_id: md5('folder1'),
        created_at: new Date
      }),
      knex('urls').insert({
        id: md5('url3'),
        url: "http://nytimes.com",
        count: 1,
        folder_id: md5('folder2'),
        created_at: new Date
      })
    ])
  })
}
