const mongoose = require('mongoose')
const campaignSchema = new mongoose.Schema({
                            username: {type:String, required: true},
                            email: {type:String, required: true},
                            phoneNumber: {type:String, required: true},
                            address: {type:String, required: true},
                            state: {type:String, required: true},
                            nationality: {type:String, required: true},
                            cause: {type:String, required: true},
                            bankAccountHolder: {type:String, required: true}, 
                            bankAccountNumber: {type:String, required: true}, 
                            swiftCode: {type:String, required: true}, 
                            branch: {type:String, required: true}, 
                            estimatedAmount: {type:String, required: true},
                            campaignImage: {type:String, required: true},
                            campaignImage: {type:String, required: true},
                            campaignImage: {type:String, required: true}
  });
  
  const campaign = mongoose.model('campaign', campaignSchema);
  module.exports = campaign