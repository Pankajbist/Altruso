const Users = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10
const path= require('path')
const fs =require('fs')

    const registerUser=  async(req, res) => {
        try{
            
            //step 1 : check if user already exists
            const data= await Users.findOne({BankAccountNumber:req.body.BankAccountNumber })
            if(data){
                res.status(409).json({
                    msg: "Bank Account Already Exists ",
                    success: false
                })
            }else{
                    //step 2: create a hash password of req.body.password
                    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
                    //step 3: create a jwt token for user
                    const token = jwt.sign({BankAccountNumber: req.body.BankAccountNumber }, process.env.SECRET_KEY);
                    console.log(token);
                    const data = await Users.create(req.body)
                    if(data){
                        const {password, ...otherFields} = data._doc
                        res.json({
                            msg: "you are successfully registered",
                            success: true,
                            token,
                            userDetails: otherFields
                        })
                    }
                }
          
        }catch(err){
            console.log(err)

        }
      
    }
    
const getAllUsers = async (req, res) => {

    const data = await Users.find().limit(req.query.size).skip((req.query.page - 1)* req.query.size )
    const count = await Users.find().count()
    if(data){
        res.json({
            userList: data,
            count:count
        })
    }
        
    }

    const loginUser = async (req, res) => {
        try {
            const data = await Users.findOne({ BankAccountNumber: req.body.BankAccountNumber })
            if (data) {
                const isMatched = await bcrypt.compare(req.body.password, data.password)
                if (isMatched) {
                    const token = jwt.sign({ BankAccountNumber: req.body.BankAccountNumber }, process.env.SECRET_KEY);
                    res.json({
                        token: token,
                        success: true,
                        userDetails: data
                    })
                } else {
                    res.json({
                        success: false,
                        msg: "Password didn't matched"
                    })
                }
            } else {
                res.json({
                    success: false,
                    msg: "Bank account doesn't exist"
                })
            }
        } catch (err) {
            console.log(err)
        }
    
    }
    const changePassword =  async(req, res) => {
        try{
             // dbData= Users.findById(req.params.id)
            const dbData=await Users.findById(req.params.id)
    
            if(dbData){
                //1. req.body.currentPassword and dbData.password
                //bcrypt.compare(req.body.password, data.password)
                const isMatched= await bcrypt.compare(req.body.currentPassword, dbData.password)
                if(isMatched){
                     //if true, update database=> 
                     //findByIdandUpdate(req.params.id, {password: req.body.newPassword})
                    req.body.newPassword = await bcrypt.hash(req.body.newPassword, saltRounds)
                    await Users.findByIdAndUpdate(req.params.id,{password: req.body.newPassword})
                    res.json({
                        msg:"Password Changed Successfully",
                        changePass:true
                    })
                }else{
                    res.json({
                        changePasssuccess: false,
                        msg: "Current Password doesn't matched"
                    })
                }
            }
        }catch(err){
            console.log(err)
        }
    }
    
    
        const changeUserDetails = async (req, res) => {
            try {
                //to check the current details of user
                await Users.findByIdAndUpdate(req.params.id,{ $set: req.body })
                const data = await Users.findById(req.params.id)
                if (data) {
                    res.json({
                        msg: "Details changed successfully",
                        success: true,
                        userDetails: data
                    })
                }
            } catch (error) {
                console.log(error)
            }
        
        
        }
    module.exports = { registerUser, loginUser,getAllUsers,changeUserDetails, }
