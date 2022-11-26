const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',()=>console.log('connected to "shop" database'), err=>console.log(err.message));
// run();

// async function run(){
//    try{
//       const user = await User.find();
//       console.log(user);
//    }catch(err){
//       console.log(err.message)
//    }
// }

module.exports = mongoose;