const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    chef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Chef',
    },

    text: {
        type: String,
        required: [true, 'Please add a text']
    },
},

     {
        timestamps: true,
     }

)

module.exports = mongoose.model('Food', foodSchema)