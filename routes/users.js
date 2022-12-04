const express = require('express');
let router = express.Router();
const db = require('../data/db.js')

const process = require('process');

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
      if(existingUser === []){
         console.log('existing username')
         res.send(new Error('Existing username')); return;
      }else{
         try {
            const user = await db.createUser(req.body.username, req.body.password)
            console.log('[log users.js] user created: ', user)
            res.send(user)
         } catch (error) {
            res.send(new Error('Can`t create')); return;
         }
      }
   })

module.exports = router