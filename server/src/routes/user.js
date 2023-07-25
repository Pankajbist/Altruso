const express=require('express')
const router=express.Router()
const UsersController = require('../controller/users')
router.get('/checkUserExists/:email',UsersController.checkIfUserExists )
router.post('/register', UsersController.registerUser )

module.exports=router;