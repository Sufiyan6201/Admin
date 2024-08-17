const catModel = require("../models/category.Schema");
const subCatModel = require("../models/sub-category.Schema");

const subCat =async (req,res)=>{
    try {
     let cat = await catModel.find({})
     return res.render('./pages/subCatPage',{cat});
    } catch (error) {
     res.send(error.massge)
    }  
}

const addSubCat = async (req,res)=>{
     let {name,catId}=req.body;
     try {
     await subCatModel.create(req.body);
     res.redirect('back');
     } catch (error) {
          res.send(error.massge)
     }
}
const viewSubCat = async(req,res)=>{
     try {
          let subCat=await subCatModel.find({});
          return res.render('pages/viewSubCat',{subCat})
     } catch (error) {
          res.send(error.massge)
     }
}
module.exports= {subCat,addSubCat,viewSubCat}