const { Router } = require("express");
const { extraCat, addExtraCat, viewExtraCat } = require("../controller/extraCat.Controller");

const extraCatRouter = Router();
extraCatRouter.get('/',extraCat);
extraCatRouter.post('/',addExtraCat);
extraCatRouter.get('/view',viewExtraCat);

module.exports = extraCatRouter;
