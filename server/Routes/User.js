const express = require('express');
const {addUser,getAllUser, deleteUser} = require('../Controller/UserController')

const router = express.Router();

router.post('/user',addUser);
router.get('/user', getAllUser);
router.delete('/user/:id', deleteUser);
router.get('/chon', (req,res) => {
    console.log("chon");
})
module.exports = router;