const router = require("express").Router();

const multer = require('../../Middleware/multer');
let order = require("../../Controllers/order.controller")

//Routes related to user actions of types temp-admin, staff, lecturer and student
router.post("/create", upload.createUpload);

module.exports = router;