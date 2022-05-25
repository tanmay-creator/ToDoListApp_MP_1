const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.use('/profile', userController.profile);
router.use('/favourites', userController.favourites)

module.exports   = router;

