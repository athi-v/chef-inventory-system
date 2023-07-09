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

    description: {
        type: String,
        required: [true, 'Please add a description']
    },

    typeList: {
        type: String,
        required: [true, 'Please add a type']
    },

    quantity: {
        type: Number,
        required: [true, 'Please add a quantity']

    },
    price: {
        type: Number,
        required: [true, 'Please add a price']

    }
},

     {
        timestamps: true,
     }


)

module.exports = mongoose.model('Food', foodSchema)