const express = require('express')
const router = express.Router()
const {getFoods, 
    setFoods, 
    updateFoods,
     deleteFoods} = require('../controllers/foodController')
     const { protect } = require('../middleware/authMiddlware')


router.route('/').get(protect, getFoods).post(protect, setFoods)
router.route('/:id').put(protect, updateFoods).delete(protect, deleteFoods)

module.exports = router