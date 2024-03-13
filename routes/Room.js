const { get } = require('mongoose')
const { getAllRoom, createRoom, updateRoom, getRoom, deleteRoom } = require('../controllers/room')

const { verifyAdmin } = require('../middleware/verify.js')
const express = require('express')

const router = express.Router()

router.get('/getAllRooom', getAllRoom)
router.route('/getRoom', getRoom)
router.post('/createRoom/:hotelid', verifyAdmin, createRoom)
router.put('/updateRoom/:id', updateRoom)
router.delete('/deleteRoom/:id/:hotelid', verifyAdmin, deleteRoom)
