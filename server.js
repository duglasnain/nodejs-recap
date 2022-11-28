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

app.route('/login')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/log-in-out.html`);
   })

app.route('/register')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/register.html`);
   })

   ////registry for users.json
// app.route('/register/reg')
//    .post((req, res)=>{
//       const data = require('./users.json')
//       let exists = 0
//       for(let i = 0; i < data.length; i++){
//          if(req.body.username === data[i].username)
//             exists = 1;
//       }
//       if(!exists){
//          data.push(req.body);
//       }else{
//          res.send(new Error('Existing username')); return
//       }
//       fs.writeFile(`${__dirname}/users.json`, JSON.stringify(data, null, 3), (err) => {
//          res.send(err)
//       })
//    })


app.listen(3000, ()=>console.log('started on 3000'));

// app.listen(3000, "192.168.1.5", () => console.log("Server started")); //LAN HOST
//instead of 192.168.1.5 should be LAN ip address