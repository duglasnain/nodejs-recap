const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.static(`${__dirname}`))
app.use(express.static(`${__dirname}/views/auth`))
app.use(express.json())

app.route('/api/users')
   .get((req, res)=>{
      res.json(require('./users.json'))
   })
   

app.route('/login')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/log-in-out.html`);
   })

app.route('/register')
   .get((req, res)=>{
      res.sendFile(`${__dirname}/views/auth/register.html`);
   })

app.route('/register/reg')
   .post((req, res)=>{
      console.log(req.body);
      // fetch('http://localhost:3000/api/users')
      // .then(res=>res.json())
      // .then(data=>{
      //    let exists = 0         
      //    data.forEach(element=>{
      //       if(req.body.username === element.username)
      //          exists = 1;
      //    })
      //    if(!exists){
      //       data.push(req.body);
      //    }else{
      //       res.send(new Error('Existing username')); return
      //    }
      //    console.log(data);
      //    fs.writeFile(`${__dirname}/users.json`, JSON.stringify(data), (err) => {
      //       res.send(err)
      //    })

      //    // res.send('success');
      // })
      // .catch(err=>console.error(err));
      const data = require('./users.json')
      // console.log(data)
      let exists = 0
      for(let i = 0; i < data.length; i++){
         if(req.body.username === data[i].username)
            exists = 1;
      }
      if(!exists){
         data.push(req.body);
      }else{
         res.send(new Error('Existing username')); return
      }
      // console.log(data);
      fs.writeFile(`${__dirname}/users.json`, JSON.stringify(data, null, 3), (err) => {
         res.send(err)
      })
   })


app.listen(3000, ()=>console.log('started on 3000'));

// app.listen(3000, "192.168.1.5", () => console.log("Server started")); //LAN HOST
//instead of 192.168.1.5 should be LAN ip address