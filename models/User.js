const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      lowercase: true,
      maxlength: 255,
      minlength: 10,
   },
   password: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 8,
   },
   created: {
      type: Date,
      default: Date.now(),
   }
})

module.exports = mongoose.model('User', userSchema);