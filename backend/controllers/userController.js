const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const createToken = (_id) => {
return jwt.sign({_id}, process.env.SECRET, {expiresIn: process.env.EXPIRE_TOKEN})
}

const generateToken = (user, statusCode, res) => {
const token = createToken(user._id)
const options = {
  htttpOnly: true,
  expire: new Date(Date.now() + process.env.EXPIRE_TOKEN)
}

res.status(statusCode)
.cookie('token', token, options)
.json({success: true, token})
}


// register a user

const regUser = async(req, res) => {
  const {name, email, password} = req.body

  const check = await userModel.findOne({email})
  if(check){
    res.status(400).json({success: false, message: 'User already exist'})
  }

  try {
    const user = await userModel.create({email, password, name})
    res.status(200).json({success:true, user})
    await user.save()
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

//Login user
const logUser = async(req, res) => {
  const {email, password} = req.body;

  if(!email || !password){
    res.status(400).json({message: 'All field must be filled'})
  }

  try {
    const user = await userModel.findOne({email})
    if(!user){
      res.status(400).json({message: "No user found with this credential"})
    }

    const compare = await bcrypt.compare(password, user.password)
    if(!compare){
    return  res.status(400).json({message: "No user found with this credential"})
    }

    generateToken(user, 200, res)
  } catch (error) {
    console.log(error);
    
    res.status(400).json({message: 'Cannot login, check credentials'})
  }
}

// User profile
const userProfile = async(req, res) => {
const user = await userModel.findById(req.user) 
res.status(200).json({success: true, user})
}

// Logout user
const logoutUser = async(req, res) => {
  res.cookie('token', '').json(true)
}

module.exports = {regUser, logUser, userProfile, logoutUser}