const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:user_id', userController.findOne);
router.put('/:user_id', userController.update);
router.delete('/:user_id', userController.delete);

module.exports = router;