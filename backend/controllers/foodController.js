const asyncHandler = require('express-async-handler')
const Food = require('../models/foodModel')
const Chef = require('../models/chefModel')



// @descr Get Foods
// @route GET /api/foods
// @access Private
const getFoods = asyncHandler(async (req, res) => {

    const foods = await Food.find({chef: req.chef})

    res.status(200).json(foods)
})

// @descr Set Foods 
// @route SET /api/foods
// @access Private
const setFoods = asyncHandler(async (req, res) => {
if(!req.body.text || !req.body.description || !req.body.typeList || !req.body.quantity || !req.body.price) {
    res.status(400)
throw new Error('Please add a text')
}    

const food = await Food.create({
    text: req.body.text,
    description: req.body.description,
    typeList: req.body.typeList,
    quantity: req.body.quantity,
    price: req.body.price,
    chef: req.chef.id,
})
    res.status(200).json(food)
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

if(!req.chef) {
    res.status(400)
    throw new Error('User not found')
}
if(food.chef.toString() !== req.chef.id) {
    res.status(401)
    throw new Error('Chef not authorized')
}

    const updateFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
        new: true,

    })
    res.status(200).json(updateFood)
})

// @descr Delete Foods
// @route DELETE /api/foods/:id
// @access Private
const deleteFoods = asyncHandler(async (req, res) => {
    try {
      const food = await Food.findById(req.params.id);
      if (!food) {
        res.status(400).json({ error: 'Food not found' });
        return;
      }


      if(!req.chef) {
          res.status(400)
          throw new Error('User not found')
      }
      if(food.chef.toString() !== req.chef.id) {
          res.status(401)
          throw new Error('Chef not authorized')
      }
  
      await food.deleteOne();
  
      res.status(200).json({ id: req.params.id });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

module.exports = {
    getFoods, setFoods, updateFoods, deleteFoods,
}