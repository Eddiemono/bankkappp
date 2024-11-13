const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },

  email:{
    type: String,
    required: true,
    unique: true,
  },

  password:{
    type: String,
    required: true,
  },

  role:{
    type: String,
    enum: ['admin', 'customer'],
    default: 'customer'
  },

  balance: {
    type: Number,
    enum: ['5000.00',' 0.00'],
    default: '0.00'
  },
}, {timestamps: true});

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
});


const User = mongoose.model('User', userSchema); 
module.exports = User;