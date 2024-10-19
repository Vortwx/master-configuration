const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.create);
router.get('/', categoryController.findAll);
router.get('/:category_id', categoryController.findOne);
router.put('/:category_id', categoryController.update);
router.delete('/:category_id', categoryController.delete);

module.exports = router;