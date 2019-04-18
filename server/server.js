const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



let port = process.env.PORT || 3001;

app.listen(port, () => console.log('listening on ' + port))
