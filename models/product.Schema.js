const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');
const { subCat } = require('../controller/subCat.Controller');

const productSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true,
          unique: true
     },
     description: {
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     image: {
          type: String,
          required: true
     },
     category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'catModelTbl'
     },
     subCat:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'subCatModelTbl'
     },
     extraCat:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'extraCatModelTbl'
     }
})
const productModel = mongoose.model('productTbl', productSchema)
module.exports = productModel;