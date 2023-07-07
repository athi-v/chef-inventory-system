const express = require('express')
const { registerChef, loginChef, getMe } = require('../controllers/chefController')
const { protect } = require('../middleware/authMiddlware')
const router = express.Router()


router.post('/register', registerChef)
router.post('/login', loginChef)
router.get('/me', protect, getMe)

module.exports = router