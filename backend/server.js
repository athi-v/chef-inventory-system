const express = require('express')
const color = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/foods', require('./routes/foodRoutes'))
app.use('/api/chefs', require('./routes/chefRoutes'))


app.use(errorHandler)

app.listen(port, () => 
console.log(`Server started on port ${port}`)
)