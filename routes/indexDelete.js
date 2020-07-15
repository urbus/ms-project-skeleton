const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const methodOverride = require('method-override');  //*library for overriding methods

//* OVERRIDING LOG OUT ROUTE
router.use(methodOverride('_method'));


router.delete('/logout',controller.deleteLogout);


module.exports = router;