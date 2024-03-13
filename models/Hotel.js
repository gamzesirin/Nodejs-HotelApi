const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		star: {
			type: Number,
			min: 0,
			max: 5,
			required: true
		},
		photos: {
			type: [String]
		},
		address: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		distance: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		rooms: {
			type: [String]
		},
		featured: {
			type: Boolean,
			default: false
		},
		cheapestprice: {
			type: Number,
			required: true
		}
		// createdBy: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'User'
		// }
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Hotel', hotelSchema)
