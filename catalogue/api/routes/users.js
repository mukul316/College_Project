const mysql =require('mysql');
const express = require('express')
const router = express.Router()

function getNewConnection() {
    return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: '202004-im215-rest',
    multipleStatements: true,
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

// 




//return list of users 
router.get('/users', (req, res) => {
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

router.post('/users', (req, res) => {
    const connection = getNewConnection();
    const user= req.body;
const queryString = 'insert into users value  (NULL, ${users.first_name},${user.last_name}, ${user.age},${user.email-id},${user.subject})'
console.log(queryString)
    
    console.log(req.first_name)
          res.end()
})


//update user

router.patch('/users', (req, res) => {
    console.log('from patch')
    console.log(req.body)
    console.log(req.first_name)
          res.end()
})
router.post("/users", (req, res) => {
    console.log(req.query)
          res.end()
})


// delete a user 

router.delete('/users', (req, resp) => {
    const connection = getNewConnection()
    const queryString = 'delete from users where id = ${req.params.id}'
  
    connection.query(queryString, (err, res, fields) => {
      console.log('Got Response from Database Server')
      if (err != null) {
        console.error(err);
        res.sendStatus(500);
      }
  
      console.log(res)
      if (res.affectedRows == 0) {
        res.sendStatus(404)
      }
  
      res.end();
    })
  })
//Get user
router.get('/users/:id', (request, response) => {
    const connection = getNewConnection()
    const queryString = `select * from users where id = ${request.params.id}`
  
    connection.query(queryString, (err, rows, fields) => {
      console.log('Got Response from Database Server')
      if (err != null) {
        console.error(err);
        response.sendStatus(500);
      }
  
      if (rows.length == 0) {
        response.sendStatus(404)
      }
  
      response.json(rows[0])
    })
})

module.exports= router;