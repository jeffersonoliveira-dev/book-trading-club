const express = require("express");
let router = express.Router();
const User = require("../db/UserModel.js");

// get all books
router.get("/books", (req, res) => {
  let allBooks = [];
  User.find({}, (err, docs) => {
    docs.map(item => {
      item.books.map(book => {
        allBooks = [
          ...allBooks,
          { id: item._id, user: req.user._id, name: item.name, book: book }
        ];
      });
    });
  }).then(() => {
    let trading = [];
    req.user.trade.map(book => {
      trading.push({
        bookWish: book.bookWish,
        bookOffer: book.bookOffer
      });
    });
    let data = {
      tradingBooks: trading,
      allBooks: allBooks
    };
    res.send(data);
  });
});

router.get("/trades", (req, res) => {
  // usar req.user.name e req.user.trade para indentificar quem é o offer e o wish
});

// get user books
router.get("/userbooks", (req, res) => {
  res.send(req.user.books);
});

// trade send to notification
router.post("/trade", (req, res) => {
  User.findOne({ _id: req.user._id }).then(user => {
    req.body.trade.status = "offer";
    user.trade = [...user.trade, req.body.trade];
    user.save();
    res.send(true);
  });
  User.findOne({ _id: req.body.trade.userWish }).then(user => {
    req.body.trade.status = "wish";
    user.trade = [...user.trade, req.body.trade];
    user.save();
  });
});

router.post("/canceltrade", (req, res) => {
  User.findOne({ _id: req.body.bookTrade.requester }).then(user => {
    let cancelTrade = [];
    user.trade.map(trade => {
      if (
        trade.bookWish === req.body.bookTrade.book &&
        trade.userWish === req.body.bookTrade.requested
      ) {
        trade.status = "cancel";
        user.save();
      }
      cancelTrade.push(trade);
    });
    user.trade = cancelTrade;
    user.save();
    console.log(user);
  });
  User.findOne({ _id: req.body.bookTrade.requested }).then(user => {
    let cancelTrade = [];
    user.trade.map(trade => {
      if (
        trade.bookWish === req.body.bookTrade.book &&
        trade.userOffer === req.body.bookTrade.requester
      ) {
        trade.status = "cancel";
        user.save();
      }
      cancelTrade.push(trade);
    });
    user.trade = cancelTrade;
    user.save();
    console.log(user);
  });
  res.send(false);
});

// add book

router.post("/add", (req, res) => {
  User.findOne({ _id: req.user._id }).then(user => {
    user.books = [...req.user.books, req.body.book];
    user.save();
    res.send(user.books);
  });
});

// remove book

router.post("/remove", (req, res) => {
  User.findOne({ _id: req.user._id }).then(user => {
    console.log(req.body.books);
    user.books = req.body.books;
    user.save();
  });
});

router.get("/profile", (req, res) => {
  let data = {
    name: req.user.name,
    city: req.user.city,
    state: req.user.state
  };

  res.send(data);
});

router.post("/profile", (req, res) => {
  User.findOne({ _id: req.user._id }).then(user => {
    (user.name = req.body.name),
      (user.city = req.body.city),
      (user.state = req.body.state);
    user.save();
  });
});

// trade api here

module.exports = router;
