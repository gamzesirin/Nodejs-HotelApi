const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
	const token = req.cookies.token
	if (!token) {
		return res.status(401).json({ message: 'Yetkisiz erişim' })
	}

	jwt.verify(token, 'SECRET_KEY', (err, user) => {
		if (err) {
			return res.status(403).json({ message: 'Token geçersiz' })
		}
		req.user = user
		next()
	})
}

const verifyUser = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id == req.params.id || req.user.isAdmin) {
			next()
		} else {
			res.status(403).json({ message: 'Login başarısız' })
		}
	})
}

const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next()
		} else {
			res.status(403).json({ message: 'Admin yetkin yok' })
		}
	})
}

module.exports = { verifyToken, verifyUser, verifyAdmin }
