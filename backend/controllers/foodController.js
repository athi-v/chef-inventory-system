const asyncHandler = require('express-async-handler')
const Food = require('../models/foodModel')


// @descr Get Foods
// @route GET /api/foods
// @access Private
const getFoods = asyncHandler(async (req, res) => {

    const foods = await Food.find()

    res.status(200).json(foods)
})

// @descr Set Foods
// @route SET /api/foods
// @access Private
const setFoods = asyncHandler(async (req, res) => {
if(!req.body.text) {
    res.status(400)
throw new Error('Please add a text')
}    

const food = await Food.create({
    text: req.body.text,
})
    res.status(200).json({message: 'Set Foods'})
})

// @descr Update Foods
// @route UPDATE /api/foods/:id
// @access Private
const updateFoods = asyncHandler(async (req, res) => {
    const food = await Food.findById(req.params.id)
    if(!food) {
        res.status(400)
        throw new Error('Food not found')
    }
    const updateFood = await Food.findByIdUpdate(req.params.id, req.body, {
        new: true,

    })
    res.status(200).json(updateFood)
})

// @descr Delete Foods
// @route DELETE /api/foods/:id
// @access Private
const deleteFoods = asyncHandler(async (req, res) => {
    const food = await Food.findById(req.params.id)
    if(!food) {
        res.status(400)
        throw new Error('Food not found')
    }

    await food.remove()
    
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getFoods, setFoods, updateFoods, deleteFoods,
}