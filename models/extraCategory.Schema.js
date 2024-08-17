const mongoose = require('mongoose');

const extraCatSchema = new mongoose.Schema({
     name: String
})
const extraCatModel = mongoose.model('extraCatModelTbl',extraCatSchema);

module.exports = extraCatModel