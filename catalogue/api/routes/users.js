const mysql =require('mysql');
const express = require('express')
const router = express.Router()
module.exports= router;

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

router.post('/users', (request, response) => {
    const connection = getNewConnection()
    const user = request.body
    const queryString = `insert into users values `
  
    connection.query(queryString, (err, result, fields) => {
      console.log('Got Response from Database Server')
      if (err != null) {
        console.error(err);
        response.sendStatus(500);
      }
  
      response.json({id: result.insertId})
    })
  })

// delete a user 
router.delete('/users/:id', (request, response) => {
    const connection = getNewConnection()
    const queryString = `delete from users where id = ${request.params.id}`
  
    connection.query(queryString, (err, res, fields) => {
      console.log('Got Response from Database Server')
      if (err != null) {
        console.error(err);
        response.sendStatus(500);
      }
  
      console.log(res)
      if (res.affectedRows == 0) {
        response.sendStatus(404)
      }
  
      response.end();
    })
  })
  



//Get user

    router.get('/user/:id', (request, response) => {
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