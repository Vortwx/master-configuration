const express = require('express');
const router = express.Router();
const spendingController = require('../controllers/spendingController');

router.post('/', spendingController.create);
router.get('/', spendingController.findAll);
router.get('/:spending_id', spendingController.findOne);
router.put('/:spending_id', spendingController.update);
router.delete('/:spending_id', spendingController.delete);

module.exports = router;