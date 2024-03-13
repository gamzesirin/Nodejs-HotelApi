const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		img: {
			type: String
		},
		isAdmin: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
