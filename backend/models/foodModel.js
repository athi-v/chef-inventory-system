const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
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