const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [2, "Price must be at least 2 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]
    },
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
