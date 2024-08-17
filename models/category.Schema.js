const mongoose = require('mongoose');

// const catSchema = new mongoose.Schema({
//      name: {
//           type: String,
//           required: true
//      }
     
// })

const catSchema = new mongoose.Schema({
     name: { type: String, required: true, unique: true },
     subCatId: [{ type:   
    mongoose.Schema.Types.ObjectId, ref: 'subCatModelTbl' }]
   });
const catModel = mongoose.model('catModelTbl', catSchema);

module.exports=catModel