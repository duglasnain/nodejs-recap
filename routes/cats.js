const express = require('express');
const router = express.Router();
const db = require('../data/db')

router.use(express.json())
router.route('/')
   .get(async(req,res)=>{
      res.json(await db.catToJson())
   })

router.route('/reg')
   .post(async(req, res)=>{
      try {
         const cat = await db.createCatInstance(req.body.name, req.body.bored_action, req.body.image_link, req.body.age);
         res.send(cat)
      } catch (error) {
         console.log(error)
      }
   })

router.route('/delete-all')
   .get(async(req, res)=>{
      try {
         await db.deleteAllCats();
      } catch (error) {
         console.log(error)
      }
      res.send('done')
   })

module.exports = router