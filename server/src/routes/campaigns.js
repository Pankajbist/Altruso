const express=require('express')
const router=express.Router()
const campaignsController=require('../controller/campaigns')

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Math.floor(Math.random() *10000000)+ file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
// router.get('/phone-available/:phoneNumber',UsersController.checkIfUserExists )

router.get('/campaign-img/:id', campaignsController.getcampaignImageById)
router.post("/campaigns", upload.single('campaigns'), campaignsController.addNewcampaigns)

router.get('/campaigns',campaignsController.getAllcampaigns)

module.exports=router;

