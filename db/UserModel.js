let mongoose = require('mongoose')
let Schema = mongoose.Schema
let bcrypt = require('bcrypt') 

let UserSchema = new Schema({
  name: String,
  city: String,
  state: String,
  email: String,
  books: Array,
  trade: Array,
  notifications: Array
})

const User = module.exports = mongoose.model('User', UserSchema)


module.exports.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser.save(callback)
    })
  })
}


