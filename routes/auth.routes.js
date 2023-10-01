const express = require('express');
const router = express.Router();
const { authMDW } = require('../middlewares');
const { authControllers: ctrl } = require('../controllers');

router.post('/register', ctrl.registerCTRL);
router.post('/login', ctrl.loginCTRL);
router.get('/logout', authMDW, ctrl.logoutCTRL);

module.exports = router;
