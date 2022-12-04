const mongoose = require('mongoose')
const catSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      maxlength: 50
   },
   bored_action: {
      type: String,
      maxlength: 255,
   },
   image_link: String,
   age: Number
})

module.exports = mongoose.model('Cat', catSchema)