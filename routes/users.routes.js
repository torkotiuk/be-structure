const express = require('express');
const router = express.Router();
const { usersControllers: ctrl } = require('../controllers');

router.get('/', ctrl.getAllUsersCTRL);
router.get('/:id', ctrl.getUserByIdCTRL);
router.delete('/:id', ctrl.deleteUserCTRL);

module.exports = router;
