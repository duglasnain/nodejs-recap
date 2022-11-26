const db = require('../data/db')
const userSchema = new db.Schema({
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

userSchema.methods.getUsername = () => {
   return this.username;
}

module.exports = mongoose.model('User', userSchema);