const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/controller');

router.get('/', ctrl.home);
router.post('/:value', ctrl.consultar);

module.exports = router;