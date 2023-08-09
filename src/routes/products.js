const express = require('express');
const router = express.Router ();
const controller = require ('../controllers/productsControllers');

router.post ('/crear', controllers.crear);
router.get ('/detalle/:id', controllers.detalle);
router.get ('/listar/:name?', controllers.listar);

module.exports = router;