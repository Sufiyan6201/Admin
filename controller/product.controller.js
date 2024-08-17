const catModel = require("../models/category.Schema");
const productModel = require("../models/product.Schema");

const addProduct= async(req,res)=>{
     try {
          let data = await productModel.create({...req.body,image:req.file.path});
     return res.redirect('back');
     } catch (error) {
          console.log(error.massage);
     }
}
const productPage=async (req,res)=>{
     let cat = await catModel.find({});
     // let subCat = await catModel.find({});

     return res.render('pages/addProduct',{
          cat
     })
}
const viewProduct=async(req,res)=>{
     try {
          try {
               let products =await productModel.find({}).populate({
                    path:'category',
                    select:'name'
               }).populate({
                    path:'subCat',
                    select:'name'
               }).populate({
                    path:'extraCat',
                    select:'name'
               });
               console.log(products);
               return res.render('pages/viewProduct',{products

               });
          } catch (error) {
               res.send(error.massage)
          }
     } catch (error) {
          
     }
}
module.exports={addProduct,productPage,viewProduct}