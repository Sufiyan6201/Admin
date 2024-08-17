const  mongoose  = require("mongoose");

// const subCatSchema = new mongoose.Schema({
//      name: String
// });
const subCatSchema = new mongoose.Schema({
     name: { type: String, required: true, unique: true },
     extraCatId: [{ type:   
    mongoose.Schema.Types.ObjectId, ref: 'extraCatModelTbl' }]
   });
 const subCatModel = mongoose.model('subCatModelTbl',subCatSchema);

 module.exports= subCatModel;