const express=require('express');

const bodyParser= require('body-parser');

const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());
(app.use(express.static(__dirname + '/')))
var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'mydb',
    password: 'root',
    debug: false,
    multipleStatements: true
});
connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});


const db= {
    users :[
        { id:'1',
            name: 'mukul',
    lastname: 'sharma',
    password:'mm'
},
{
    name: 'frnd',
 lastname:'jyotika'
}
]
}

app.get('/',(req,res)=> {
    
    res.json(index.html);
})

app.post('/signing',(req,res)=> {
    if (req.body.name===db.users[0].name &&
       req.body.password===db.users[0].password)
    {
    res.json('register user');
    }
    else {
        res.status(400).json('errorlogin in');
    }
})

app.get('/users',(req,res)=> {
    

connection.query('SELECT * from mydb_rest.users ', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
       res.json(rows);
    });
});

(app.use(express.static(__dirname + '/Public')))
app.post('/CreateUser',(req,res)=> {
   
    const fname=req.body.fname;
    const lname=req.body.lname;
    const age=req.body.lname;
     values=[[,req.body.fname,req.body.lname,req.body.age]];
    console.log(fname);
     console.log(lname);
     console.log(age);


connection.query('INSERT INTO mydb_rest.users(id,firstname,lastname,age) VALUES ?',[values], (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
       res.json(rows);
    });
})

app.post('/DeleteUser',(req,res)=> {

     values=[[req.body.id]];


connection.query('DELETE FROM mydb_rest.users where id=?',[values], (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
       res.json(rows);
      
    });
});

app.post('/ContactUser',(req,res)=> {
   
    const fname=req.body.fnamec;
    const email=req.body.email;
    const textarea=req.body.textarea;
     values=[[,req.body.fname,req.body.email,req.body.textarea]];
    console.log(fname);
     console.log(email);
     console.log(textarea);


connection.query('INSERT INTO mydb_rest.ContactUsers(Personid,Firstname,email,textarea) VALUES ?',[values], (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
       res.json(rows);
    });
})




app.post('/register',(req,res)=> {
    const {name,lastname,password}=req.body;
    
    })


app.listen(3000);  