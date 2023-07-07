const mongoose = require('mongoose')

const chefSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please a name']
    },
    email: {
        type: String,
        require: [true, 'Please a name']
    },
    password: {
        type: String,
        require: [true, 'Please a name']
    },
},

{
    timestamps: true 
})

module.exports = mongoose.model('Chef', chefSchema)