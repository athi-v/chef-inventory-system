const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/foods', require('./routes/foodRoutes'))

app.use(errorHandler)

app.listen(port, () => 
console.log(`Server started on port ${port}`)
)