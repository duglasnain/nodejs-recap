const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/views/auth`))

app.route('/').get((req,res)=>{
   res.sendFile(path.join(`${__dirname}/views/auth/index.html`));
})

app.listen(3001, ()=>console.log('started on 3001'));




// app.listen(3000, "192.168.1.5", () => console.log("Server started")); //LAN HOST
//instead of 192.168.1.5 should be LAN ip address