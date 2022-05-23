const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json({ results: newAuthor });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ id: req.params.id })
        .then(foundAuthor => {
            res.json({ results: foundAuthor });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}



module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor });
        })
        .catch(err => {
            res.json({ msg: "Error", error: err });
        })
}