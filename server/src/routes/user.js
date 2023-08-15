const express=require('express')
const router=express.Router()

const UsersController = require('../controller/user')
// router.get('/phone-available/:phoneNumber',UsersController.checkIfUserExists )
router.post('/register', UsersController.registerUser )
router.post('/login', UsersController.loginUser)
router.get('/users', UsersController.getAllUsers)
router.post('/change-password/:id', UsersController.changePassword )
router.put('/users/:id', UsersController.changeUserDetails)
  
module.exports=router;