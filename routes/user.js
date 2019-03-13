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
    console.log(user)
  })

  res.redirect('/login');
})

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user)
  })
})

router.post('/login', 
            passport.authenticate('local', {successRedirect:'/dashboard', failureRedirect:'/user/login'}),
            (req,res) => {
              res.redirect('/dashboard')
            }
           )

module.exports = router

