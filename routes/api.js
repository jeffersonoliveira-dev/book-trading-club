const express = require('express')
let router = express.Router()
const mongoose = require('mongoose')
const User = require('../db/UserModel.js')

router.get('/', (req, res) => {
  console.log('this is the right route')
})



// get all books


router.get('/books', (req, res) => {
  let allBooks = [];
  User.find({}, (err, docs) => {
    docs.map(item => {
      allBooks = [...allBooks, { id: item._id, name: item.name, books: item.books }]
    })
  }).then( () => { console.log(allBooks) } )
})

// trade send to notification

router.get('/trade', (req, res) => {
  // mount obj with 2 usernames/ids and books with trade acceptance 
})

// add book

router.post('/add', (req, res) => {
   User.findOne({_id: req.user._id}).then(user => {
      user.books = [ ...req.user.books, req.body.book ] 
      user.save()
   })
})

// remove book



module.exports = router
