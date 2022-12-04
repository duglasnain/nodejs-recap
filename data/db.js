const mongoose = require('mongoose');
const User = require('../models/User');
const Cat = require('../models/Cat')
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
         return user;
      }catch(err){
         console.log(err);
      }
   },
   findUser: async function (username){
      try{
         const user = await User.find({username: username})
         return user
      }catch(err){
         console.log(err);
         return null;
      }
   },
   deleteUser: async function (username){
      try {
         await User.deleteMany({username: username})
      } catch (error) {
         console.log(err);
      }
   },
   toJson: function(){
      try {
         return User.find({})
      } catch (error) {
         console.log(error);
         return null
      }
   },


   createCatInstance: async function(name, action, img, age){
      try{
         const newCat = await Cat.create({name: name, bored_action: action, image_link: img, age: age})
         return newCat
      }catch(err){
         return null;
      }
   },
   catToJson: function(){
      try {
         return Cat.find({})
      } catch (error) {
         console.log(error)
      }
   },
   deleteCatInstanceByName: async function(name){
      try {
         await Cat.deleteOne({name: name})
      } catch (error) {
         console.log(error)
      }
   },
   findCatInstanceByName: async function(name){
      try {
         return await Cat.find({name: name})
      } catch (error) {
         console.log('not found!')
         return 'not found!'
      }
   },
   deleteAllCats: async function(){
      try {
         await Cat.deleteMany({})
      } catch (error) {
         console.log(error)
      }
   }














}