const { allUsers, createUser, updateUser, deleteUser } = require('../controllers/user')
const { verifyAdmin, verifyUser } = require('../middleware/verify.js')
const express = require('express')

const router = express.Router()

router.get('/allUsers', verifyAdmin, allUsers)
router.post('/createUser', createUser)
router.get('/getUser/:id', verifyUser, getUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/detailUser/:id', verifyUser, detailUser)
router.put('/updateUser/:id', verifyUser, updateUser)

module.exports = router
