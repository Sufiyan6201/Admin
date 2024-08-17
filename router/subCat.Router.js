const { Router } = require("express");
const { subCat, addSubCat, viewSubCat } = require("../controller/subCat.Controller");

const subCatRouter=Router();
subCatRouter.get('/',subCat);
subCatRouter.post('/',addSubCat);
subCatRouter.get('/view',viewSubCat);

module.exports=subCatRouter