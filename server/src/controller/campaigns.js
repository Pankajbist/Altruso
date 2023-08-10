const fs = require('fs');
const path = require('path');
const campaigns=require('../models/campaigns')
const addNewcampaigns = async(req,res)=>{
    req.body.campaignImage = req.file.filename
    await campaigns.create(req.body)
      res.json({
        msg: 'success'
      })
  }
const getAllcampaigns = async(req,res)=>{
   const data =  await campaigns.find()
   if(data){
    res.json({
      data,
      msg: 'success'
    })
   }  

  }

  const getcampaignImageById = async(req,res)=> {
    const data =  await campaigns.findById(req.params.id)
    const imageDir = path.join(__dirname,'../../','uploads/'+data.campaignImage) 
    const defaultDir = path.join(__dirname,'../../','uploads/userAvatar/nobike.jpeg') 

    if(fs.existsSync( imageDir )){
        res.sendFile(imageDir)
    }else{
        res.sendFile(defaultDir)
    }
   
  }
  module.exports = {addNewcampaigns,getAllcampaigns,getcampaignImageById}