// console.log('NodeJs First Server')

//ecmascript es5 2015
//var 

// var names = "Ariba" // "",''
// console.log(names)
// var names = "maria"
// console.log(names)

// let myname = "memon";
// console.log(myname)
// myname = "ariba"
// console.log(myname)

//  const gravity = 9.8 ; 



//es6 let const
// import express from 'express'
// // const express = require('express')
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// import express from 'express';
// const app = express()
// app.get('/', (req, res) => {
//     res.send('I am Express.js server')
// })
// app.get('/desert', (req, res) => {
//     res.send('here is your desert 🏜️')
// })
// app.get('/sand', (req, res) => {
//     res.send('here is your sand ⏳')
// })

// app.listen(7000, () => {
//     console.log(`Hello server is listening at http://localhost:7000`)
// })


//concatenation
//es5 
// let firstName = "ariba"
// let lastName= "memon"
// // console.log("my name is " + firstName + lastName)

// //es6 template literals
// console.log(`my name is ${firstName} `)



// session 25/MARCH/2024

import express from 'express'

const app = express();
//get,put,post,delete
// GET (حاصل کریں):
// GET method se server se data haasil kiya jata hai.
// GET request mein data query parameters ke through bheja jata hai ya URL ke saath attach kiya jata hai.
app.get('/hello',(req,res) =>{
    res.send('Ariba')
})

// POST (نشر):

// POST method se naye data ko server par bheja jata hai.
// Yeh request server ko naye resource banane ke liye istemal hota hai.
// POST request mein data HTTP body ke through bheja jata hai jo server ke dwara accept kiya jata hai aur database ya server mein store kiya jata hai.
app.post('/hello',(req,res) =>{
  
        res.send('Hello')
     
    })

app.listen(7000,() =>{
    console.log('Hello server is listening at http://localhost:7000')
})