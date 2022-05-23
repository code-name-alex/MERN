const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}