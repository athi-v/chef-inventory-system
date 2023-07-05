const asyncHandler = require('express-async-handler')

// @descr Get Foods
// @route GET /api/foods
// @access Private
const getFoods = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Foods'})
})

// @descr Set Foods
// @route SET /api/foods
// @access Private
const setFoods = asyncHandler(async (req, res) => {
if(!req.body.text) {
    res.status(400)
throw new Error('Please add a text')
}    
    res.status(200).json({message: 'Set Foods'})
})

// @descr Update Foods
// @route UPDATE /api/foods/:id
// @access Private
const updateFoods = asyncHandler(async (req, res) => {
    res.status(200).json({message:  `Update Foods ${req.params.id}`})
})

// @descr Delete Foods
// @route DELETE /api/foods/:id
// @access Private
const deleteFoods = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Foods ${req.params.id}`})
})

module.exports = {
    getFoods, setFoods, updateFoods, deleteFoods,
}