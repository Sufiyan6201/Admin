const catModel = require("../models/category.Schema");

const catPage=(req,res)=>{
     try {
          return res.render('./pages/catPage')
     } catch (error) {
          console.log(error.massage);
     }
}
const addCat =async (req,res)=>{
     try {
          let data = await catModel.create(req.body);
          res.redirect('back');
     } catch (error) {
          console.log(error.massage);
     }
}
// const viewCat = async(req,res)=>{
//      try {
//           let cat= await catModel.find({}).populate({
//                path: 'subCatId',
//                populate:{
//                     path : extraCatId
//                }
//           });
//          res.render('pages/viewCatPage',{cat});
//           //return res.jason(cat)
//      } catch (error) {
//           return res.send(error.massage)
//      }
// }

const viewCat = async (req, res) => {
     try {
       const cat = await catModel.find({}).populate({
         path: 'subCatId',
         populate: {
           path: 'extraCatId'
         }
       }).lean();
       if (!cat.length) {
         return res.send('No categories found');
       }
       res.render('pages/viewCatPage', { cat });
     } catch (error) {
       return res.send(error.message);
     }
   };
const getCat = async (req,res)=>{
     try {
          const data = await catModel.find({}).populate({
               path: 'subCatId',
               populate:{
                    path : extraCatId
               }
          });
          return res.json(data);
     } catch (error) {
          res.send(error.massage)
     }
}
module.exports={catPage,addCat,viewCat,getCat}