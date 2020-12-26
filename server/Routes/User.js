const express = require('express');
const {addUser,getAllUser} = require('../Controller/UserController')

const router = express.Router();

router.post('/user',addUser) 
router.get('/user', getAllUser);

module.exports = router;