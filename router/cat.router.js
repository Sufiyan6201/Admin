const { Router } = require("express");
const {addCat, viewCat, catPage, getCat} = require("../controller/cat.controller");

const catRouter = Router();
catRouter.get('/',catPage)
catRouter.post('/',addCat)
catRouter.get('/view',viewCat)
catRouter.get('/data',getCat)

module.exports=catRouter