// Require related packages
const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./categories.json').results

// Success
db.once('open', () => {
  categoryList
    .forEach(category => {
      Category.create(category)
    })
    .then(() => {
      console.log('insert data done')
      return db.close()
    })
    .then(() => console.log('database connection close'))
})
