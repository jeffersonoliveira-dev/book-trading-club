const express = require('express')
let router = express.Router()
const User = require('../db/UserModel.js')



// get all books
router.get('/books', (req, res) => {
  let allBooks = [];
  User.find({}, (err, docs) => {
    docs.map(item => {
      item.books.map( book => {
      allBooks = [...allBooks, { id: item._id, name: item.name, book: book }]
      } )
    })
  }).then( () => {
    res.send(allBooks)
  })
})

// get user books
router.get('/userbooks', (req, res) => {
  res.send(req.user.books)
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
      res.send(user.books)
   })
})

// remove book

router.post('/remove', (req, res) => {
   User.findOne({_id: req.user._id}).then(user => {
      console.log(req.body.books)
      user.books = req.body.books
      user.save()
   })
})



module.exports = router
