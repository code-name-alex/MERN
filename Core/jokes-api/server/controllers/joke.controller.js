const Joke = require('../models/joke.model');

module.exports.sayHello = (req, res) => {
    res.json({ msg: "Hello World" });
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ results: allJokes })
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ results: newJoke });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ id: req.params.id })
        .then(foundJoke => {
            res.json({ results: foundJoke });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => {
            res.json({ results: updatedJoke });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}