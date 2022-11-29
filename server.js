const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const db = require('./data/db.js')
db.connect_mongoose()

//routes
const users = require('./routes/users')
app.use('/api/users', users)

//mid
app.use(express.static(`${__dirname}`))
app.use(express.static(`${__dirname}/views/auth`))
app.use(express.json())



app.route('/')
   .get((req, res)=>{
      res.redirect('/register')
   })

app.route('/login')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/log-in-out.html`);
   })

app.route('/register')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/register.html`);
   })

app.listen(3000, ()=>console.log('started on 3000'));

// app.listen(3000, "192.168.1.5", () => console.log("Server started")); //LAN HOST
//instead of 192.168.1.5 should be LAN ip address