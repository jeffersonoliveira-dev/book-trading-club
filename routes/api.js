const express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  console.log('this is the right route')
})


module.exports = router
