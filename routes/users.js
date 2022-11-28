const express = require('express');
let router = express.Router();
const db = require('../data/db.js')
router.use(express.json())
router.route('/')
   .get(async (req, res)=>{
      // get users from db
      const users = await db.toJson();
      res.json(users)
      ////get users from .json on route /api/users
      // res.json(require('./users.json'))
   })

router.route('/reg')
   .post(async(req, res)=>{
      const existingUser = await db.findUser(`${req.body.username}`)
      
      if(existingUser){
         console.log('existing username')
         res.send(new Error('Existing username')); return;
      }else{
         try {
            await db.createUser(req.body.username, req.body.password)
         } catch (error) {
            res.send(new Error('Error while creating new user')); return;
         }
      }
   })

module.exports = router