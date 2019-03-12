const express = require('express')
const passport = require('passport')
const router = express.Ruter()
const LocalStrategy = require('passport-local').Strategy
const User =  require('../db/UserModel.js') 



// Register
router.post('/register', (req, res) => {
  let name = req.body.name,
  let city = req.body.city,
  let state  = req.body.state,
  let  email = req.body.email,
  let password  = req.body.password,



  
})
