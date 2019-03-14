let mongoose = require('mongoose')
let Schema = mongoose.Schema
let bcrypt = require('bcrypt') 

let UserSchema = new Schema({
  name: String,
  city: String,
  state: String,
  email: String,
  password: String,
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

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.addBook = function(id, book, callback) {
  User.find({_id: id}).then(user => {
     user.books = [ ...user.books, book ] 
  })
}
