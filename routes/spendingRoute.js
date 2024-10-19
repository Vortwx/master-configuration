const express = require('express');
const router = express.Router();
const spendingController = require('../controllers/spendingController');

router.post('/', spendingController.create);
router.get('/', spendingController.findAll);
router.get('/:id', spendingController.findOne);
router.put('/:id', spendingController.update);
router.delete('/:id', spendingController.delete);

module.exports = router;