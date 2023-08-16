const express = require('express');
const router = express.Router ();
const controllers = require ('../controllers/productsControllers');
const logMiddleware = require ('../middlewares/loggerMiddleware');

router.post ('/', logMiddleware, controllers.crear);
router.get ('/:id', controllers.detalle);
router.get ('/', controllers.listar);
router.put('/:id', logMiddleware, controllers.actualizar);

module.exports = router;