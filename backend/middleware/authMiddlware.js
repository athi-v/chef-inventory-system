const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Chef = require('../models/chefModel')

const protect = asyncHandler(async (req, res, next) => {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.chef = await Chef.findById(decoded.id).select('-password')
            next()
        }
        catch (error) {
console.log(error)
res.status(401) 
throw new Error('Not Authorized')

        }
    }
    if(!token)
    {
        res.status(401) 
throw new Error('Not Authorized, no token')

    }
})

module.exports = {protect}