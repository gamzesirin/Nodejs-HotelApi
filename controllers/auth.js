const User = require('../models/user')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
	const { username, email, password } = req.body
	try {
		const user = await User.findOne(email)
		if (user) return res.status(400).json({ message: 'Kullanıcı zaten var ' })

		if (password.length < 6) return res.status(400).json({ message: 'Şifre 6 karakterden az olamaz' })
		res.status(201).json({ user })

		const passwordHash = await bcrypt.hash(password, 10)

		const newUser = new User({ username, email, password: passwordHash })

		const token = jwt.sign(
			{ id: newUser._id, isAdmin: newUser.isAdmin },
			// process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		)
		res.cookie('token', token, { httpOnly: true }).status(201).json({ user: newUser, token })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
// email regex fonksiyonu
const validateEmail = (email) => {
	const re = /\S+@\S+\.\S+/
	return re.test(email)
}

const login = async (req, res, next) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne(email)
		if (!user) return res.status(400).json({ message: 'Böyle ir Kullanıcı bulunmuyor' })

		const passwordCompare = await bcrypt.compare(password, user.password)

		if (!passwordCompare) return res.status(400).json({ message: 'Şifre eşleşmedi' })

		const token = jwt.sign(
			{ id: newUser._id, isAdmin: newUser.isAdmin },
			// process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		)
		res.cookie('token', token, { httpOnly: true }).status(200).json({ user, token })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = { register, login, validateEmail }
