const mongoose = require('mongoose');
const User = require('../models/User');
const config = require('./config')
const URIdb = `mongodb+srv://${config.username}:${config.password}@testcluster.ojnlbbp.mongodb.net/shopdb?retryWrites=true&w=majority`
module.exports = {
   connect_mongoose: async function () {
      return mongoose.connect(
         URIdb,
         ()=>console.log("connected"), 
         err=>console.log(err.message));   
   },
   createUser: async function (username, password){
      try{
         const user = await User.create({username: username, password: password})
         return ''
      }catch(err){
         return err.message;
      }
      
      
   },
   findUser: async function (username){
      try{
         const user = await User.find({username: username})
         return user;
      }catch(err){
         return err.message;
      }
   },
   deleteUser: async function (username){
      try {
         await User.deleteMany({username: username})
      } catch (error) {
         return error.message;
      }
   },
   toJson: function(){
      try {
         return User.find({})
      } catch (error) {
         return error.message;
      }
   }
}