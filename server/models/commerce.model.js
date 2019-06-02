const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least three characters long.']
    },
    qty: {
        type: Number,
        required: [true, 'Quantity is required.'],
        min: [0, 'Quantity must be greater or equal 0.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        min: [0, 'Price must be greater or equal 0.']
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema);