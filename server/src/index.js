// const express = require('express')
// const mongoose = require('mongoose');
// require('dotenv').config()
// const connection= require('../src/db/connection')
// const Users= require('../src/models/users')
// connection()
// const cors = require('cors')
// app.use(cors())
// const app = express()
// const port = 4000
// app.use(express.json())


// app.post('/register', (req, res) => {
//   Users.create(req.body)
//   res.json({
//     msg: "Youre succesfully registered"
//   })})

// const { Schema } = mongoose;
// mongoose.connect('mongodb://localhost:27017/Altruso');

// const productSchema = new Schema({
//   productName: String, // String is shorthand for {type: String}
//   productPrice: Number,
//   description: String,
//   image: String,
//   category: String,
//   flag: {type: String, default:'valid'}

// });


// const Products = mongoose.model('Product', productSchema);

// app.post('/products', (req, res) => {
//   Products.create(req.body)
//   res.json({
//     msg: "products"
//   })
// })

// app.get('/products', async(req, res) => {
//  const data = await Products.find()
// })

// app.put('/products/:id', async(req, res) => {
//   await Products.findByIdAndUpdate(req.params.id, req.body)
//  })

//  app.delete('/products/:id', async(req, res) => {
//   await Products.findByIdAndDelete(req.params.id)
//  })

//  app.get('/products', async(req, res) => {
//   const data = await Products.find()
//  })
 
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`)

//   })

// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose
//   .connect('mongodb://localhost:27017/Altruso', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Define a User schema
// const userSchema = new mongoose.Schema({
//   fullName: String,
//   email: String,
//   password: String,
//   phoneNumber: String,
// });

// const User = mongoose.model('User', userSchema);

// // Define an API route for user registration
// app.post('/register', async (req, res) => {
//   const { fullName, email, password, phoneNumber } = req.body;

//   try {
//     // Check if the email already exists in the database
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }

//     // Create a new user document and save it to the database
//     const newUser = new User({ fullName, email, password, phoneNumber });
//     await newUser.save();

//     return res.json({ message: 'Registration successful' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

const express = require('express')
require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/users')
const cors= require('cors')
connection()

const app = express()
app.use(cors())
const port = process.env.PORT
app.use(express.json())
const PORT = process.env.PORT || 5000;
app.get('/checkUserExists/:email', async (req, res) => {
  const data= await Users.findOne({phoneNumber:req.params.phoneNumber})
  if(data){
    res.json({
      msg:"Email Id already exists"
    })
  }
  else{
    res.json({
      validPhoneNo:true
      // msg:"Valid Phone Number"
    })
  }
})

app.post('/register', async (req, res) => {
  console.log(req.body)
  await Users.create(req.body)
  res.json({
    msg: "you are successfully registered"
  })
})


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })