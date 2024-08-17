const { Router } = require("express");
const { indexPage } = require("../controller/admin.controller");

const admin_Router = Router();

admin_Router.get('/', indexPage);

module.exports = admin_Router;