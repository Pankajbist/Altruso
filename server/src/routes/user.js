const express=require('express')
const router=express.Router()
const UsersController = require('../controller/user')
// router.get('/phone-available/:phoneNumber',UsersController.checkIfUserExists )
router.post('/register', UsersController.registerUser )
router.post('/login', UsersController.loginUser)

module.exports=router;