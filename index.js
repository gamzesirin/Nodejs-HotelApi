const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const db = require('./config/db')
const authRoutes = require('./routes/Auth')
const userRoutes = require('./routes/User')
const hotelRoutes = require('./routes/Hotel')
const roomRoutes = require('./routes/Room')
dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cookieParser())

app.use('/', authRoutes)
app.use('/', userRoutes)
app.use('/', hotelRoutes)
app.use('/', roomRoutes)

db()
const port = 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))
