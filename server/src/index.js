const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const connection= require('../src/db/connection')
const product= require('../src/models/product')
connection()
const app = express()
const port = 3000
app.use(express.json())
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/Altruso');

const productSchema = new Schema({
  productName: String, // String is shorthand for {type: String}
  productPrice: Number,
  description: String,
  image: String,
  category: String,
  flag: {type: String, default:'valid'}

});


const Products = mongoose.model('Product', productSchema);

app.post('/products', (req, res) => {
  Products.create(req.body)
  res.json({
    msg: "products"
  })
})

app.get('/products', async(req, res) => {
 const data = await Products.find()
})

app.put('/products/:id', async(req, res) => {
  await Products.findByIdAndUpdate(req.params.id, req.body)
 })

 app.delete('/products/:id', async(req, res) => {
  await Products.findByIdAndDelete(req.params.id)
 })

 app.get('/products', async(req, res) => {
  const data = await Products.find()
 })
 
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)

  })