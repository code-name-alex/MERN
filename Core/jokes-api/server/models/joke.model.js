const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Id is required"],
        minlength: [2, "Id must be at least 2 characters long"]
    },
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [2, "Setup must be at least 2 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [2, "Punchline must be at least 2 characters long"]
    },
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;