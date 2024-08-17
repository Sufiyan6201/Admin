const { Router } = require("express");
const {productPage, addProduct, viewProduct } = require("../controller/product.controller");
const upload = require("../middleware/multer.middleware");

const P_Router=Router();
P_Router.post('/',upload,addProduct);
P_Router.get('/',productPage);
P_Router.get('/view',viewProduct)

module.exports=P_Router;