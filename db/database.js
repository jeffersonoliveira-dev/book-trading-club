const mongoose = require('mongoose')

const db ='mongodb://jeffvash:jeffgoliveira0@ds213896.mlab.com:13896/book-trading-club'


const connectionDB = (() => {
  mongoose.Promise = global.Promise
  mongoose.connect(db, {useNewUrlParser: true})
})()

module.exports = connectionDB
