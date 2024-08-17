const extraCatModel = require("../models/extraCategory.Schema");

const extraCat = (req, res) => {
     try {
          return res.render('./pages/extraCatPage')
     } catch (error) {
          res.send(error.massage)
     }
}
const addExtraCat = async (req, res) => {
     let { name, subCatId } = req.body;
     try {
          await extraCatModel.create(req.body);
          res.redirect('back')
     } catch (error) {
          res.send(error.massage)
     }
}
const viewExtraCat = async (req, res)=>{
     try {
          let extraCat = await extraCatModel.find({});
          return res.render('pages/viewExtraCatPage',{extraCat})
     } catch (error) {
          res.send(error.massage)
     }
}
module.exports = { extraCat, addExtraCat, viewExtraCat }