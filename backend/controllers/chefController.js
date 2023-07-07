const asyncHandler = require('express-async-handler')
const Chef = require('../models/chefModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



// @descr  Register Chef
// @route POST /api/chefs
// @access Public
const registerChef = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add details')
    }

    const chefExist = await Chef.findOne({email}) 
    if(chefExist) {
        res.status(400)
        throw new Error('Chef Exist!')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const chef = await Chef.create({
       name, email, password: hashedPassword,
    })

    if(chef) {
        res.status(201).json({
        _id: chef.id, 
        name: chef.name,
        email: chef.email,
        token: generateToken(chef._id),

    })
}
    else {
        res.status(400)
        throw new Error('Invalid user')
    }

})

// @descr  Login Chef
// @route POST /api/chefs
// @access Public
const loginChef = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    const chef = await Chef.findOne({email}) 
    if(chef && (await bcrypt.compare(password, chef.password))) {
        res.status(201).json({
            _id: chef.id, 
            name: chef.name,
            email: chef.email,
            token: generateToken(chef._id),
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user')
    }
})

// @descr  Get Chefs Data
// @route POST /api/chefs
// @access Private
const getMe = asyncHandler(async (req, res) => {
const {_id, name, email} = await Chef.findById(req.chef.id)

res.status(200).json({
    id: _id,
    name,
    email,


})
})

const generateToken = (id) => {
 return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
 })   
}
module.exports = {
    registerChef, loginChef, getMe
}