const express = require('express');
const router = express.Router();
const passport = require('passport');
const { usersControllers: ctrl } = require('../controllers');
const { authMDW } = require('../middlewares');

router.get('/', ctrl.getAllUsersCTRL);
router.get('/profile', authMDW, ctrl.getUserProfileCTRL);
router.get('/:id', ctrl.getUserByIdCTRL);
router.delete('/:id', ctrl.deleteUserCTRL);

module.exports = router;
