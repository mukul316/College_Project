const mysql =require('mysql');
const express = require('express')
const router = express.Router()

function getNewConnection() {
    return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'IM215',
    
    } )

}

router.get("/", (req, res) => {
    //console.log( "Welcome to application.")

    const person = {

           name:'john',
           age:21,
           message: 'Hello world',

    }
    res.json(person)
})
//return list of users 
router.get('/user', (req, res) => {
const connection = getNewConnection();
const queryString = 'Select * FROM users'

connection.query(queryString, (err, rows, fields) => {
    console.log('got response from database')
    if (err != null) {
        console.error(err)
        res.sendStatus(500);
        }
        res.json(rows)
    })


console.log('Defined and callback')


})

//create a user

router.post('/user', (req, res) => {
    console.log(req.body)
    console.log(req.first_name)
          res.end()
})


//update user

router.patch('/user', (req, res) => {
    console.log('from patch')
    console.log(req.body)
    console.log(req.first_name)
          res.end()
})
router.post("/user", (req, res) => {
    console.log(req.query)
          res.end()
})

module.exports= router;