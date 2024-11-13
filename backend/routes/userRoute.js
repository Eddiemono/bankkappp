const express = require('express')
const {regUser, logUser, userProfile, logoutUser} = require('../controllers/userController')

const auth  = require('../middlewares/Auth')


const router = express.Router()

router.post('/signup', regUser)

router.post('/login', logUser)

router.get('/me', auth, userProfile,)

router.post('/logout', logoutUser)

module.exports = router;