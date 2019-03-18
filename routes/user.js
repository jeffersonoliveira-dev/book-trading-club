const express = require('express')
const passport = require('passport')
const router = express.Router()
const LocalStrategy = require('passport-local').Strategy
const User =  require('../db/UserModel.js') 



// Register
router.post('/register', (req, res) => {
  let  name = req.body.name,
   city = req.body.city,
    state  = req.body.state,
     email = req.body.email,
    password  = req.body.password;
  
  const  newUser = new User({
    name,
    city,
    state,
    email,
    password
  })

  User.createUser(newUser, (err,user) => {
    if(err) throw err
  })
 // se o usuario for real, envie true
 res.send(true)
})

passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password'},
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      User.comparePassword(password, user.password,(err,isMatch) => {
        if(err) throw err;
        if(isMatch) {
					console.log('authenticated')
          return done(null, user)
					
        } else {
					console.log('not authenticated')
          return done(null, false, { message: 'invalid password' })
        }
      })
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user)
  })
})

router.post('/login', 
            passport.authenticate('local'),
            (req,res) => {
							res.send(req.isAuthenticated())
            }
           )

router.get('/logged', (req, res) => {
  res.send(req.isAuthenticated())
})
module.exports = router

