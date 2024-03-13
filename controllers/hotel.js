const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

const createHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.create(req.body)
		res.status(201).json({ hotel })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
const updateHotel = async (req, res, next) => {
	const { id } = req.params
	try {
		const hotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		res.status(200).json({ hotel })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const deleteHotel = async (req, res, next) => {
	const { id } = req.params
	try {
		await Hotel.findByIdAndDelete(id)
		res.status(200).json({ message: 'Hotel deleted successfully' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const getSingleHotel = async (req, res, next) => {
	const { id } = req.params
	try {
		const hotel = await Hotel.findById(id)
		res.status(200).json(hotel)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const getAllHotel = async (req, res, next) => {
	const { min, max, ...others } = req.query
	try {
		const hotel = await Hotel.find({ min, max, ...others, cheapestPrice: { $gt: min | 1, $lt: max | 999 } }).limit(
			req.query.limit
		)
		res.status(200).json(hotel)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const typeByCount = async (req, res, next) => {
	try {
		const hotel = await Hotel.countDocuments({ type: 'hotel' })
		const villa = await Hotel.countDocuments({ type: 'villa' })
		res.status(200).json({ type: 'hotel', count: hotel }, { type: 'villa', count: villa })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const typeByCity = async (req, res, next) => {
	try {
		const cities = req.query.cities.split(',')
		const hotel = await Promise.all(
			cities.map((city) => {
				return Hotel.countDocuments({ city: city })
			})
		)
		res.status(200).json(hotel)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotel, typeByCount, typeByCity }
