const express = require('express')
const router = express.Router()
const {getFoods, 
    setFoods, 
    updateFoods,
     deleteFoods} = require('../controllers/foodController')

router.route('/').get(getFoods).post(setFoods)
router.route('/:id').put(updateFoods).delete(deleteFoods)

module.exports = router