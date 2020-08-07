const express = require('express')
const morgan = require('morgan')
const user_routes = require('./routes/users')
const bodyParser = require('body-parser');

const app = express();
//app.use(morgan('combined'))
app.use(morgan('short'))
app.use(express.json())
app.use(user_routes)
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.end()
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  })