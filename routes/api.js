const express = require('express')
let router = express.Router()
const User = require('../db/UserModel.js')



// get all books
router.get('/books', (req, res) => {
  let allBooks = [];
  User.find({}, (err, docs) => {
    docs.map(item => {
      item.books.map( book => {
      allBooks = [...allBooks, { id: item._id, user: req.user._id, name: item.name, book: book }]
      } )
    })
  }).then( () => {
    let trading = []
    req.user.trade.map( book => {
      trading.push({
        bookWish :book.bookWish,
        bookOffer: book.bookOffer
      })

    })
    let data = {
      tradingBooks: trading,
      allBooks: allBooks
    }
    res.send(data)
  })
})

// get user books
router.get('/userbooks', (req, res) => {
  res.send(req.user.books)
})

// trade send to notification
router.post('/trade', (req, res) => {
  User.findOne({_id: req.user._id}).then( user => {
    user.trade = [ ...user.trade, req.body.trade ]
    user.save()
    res.send(true)
  } )
  User.findOne({_id: req.body.trade.userWish}).then( user => {
    user.trade = [ ...user.trade, req.body.trade ]
    user.save()
    console.log(user)
  } )
})

router.post('/canceltrade', (req, res) => {
  User.findOne({_id: req.user._id}).then( user => {
    let newtrade = user.trade.filter( item => {
      return item.bookWish !== req.body.bookTrade
    } )
    user.trade = newtrade 
    user.save()
    res.send(false)
  } )

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

router.get('/profile', (req, res ) => {
  let data = {
    name: req.user.name,
    city: req.user.city,
    state: req.user.state
  }

  res.send(data)
})

router.post('/profile', (req, res) => {
  User.findOne({_id: req.user._id}).then(user => {
    user.name = req.body.name,
    user.city = req.body.city,
    user.state = req.body.state
      user.save()
   })
})


// trade api here


module.exports = router
