const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')

const auth = async(req, res, next) => {
  const {token} = req.cookies
  if(!token){
  return  res.status(400).json({message: 'You must login to access this page'})
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = await userModel.findById(decoded._id)
    next()
  } catch (error) {
    console.log(error);
  return  res.status(400).json({message: 'You must login to access this page'})
  }
}

module.exports = auth;
