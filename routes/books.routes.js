
const router = require('express').Router();
const booksController = require('../controllers/books.controller');
//http://localhost:3000/all
router.get('/all', booksController.getAllBooks);
//http://localhost:3000/first
router.get('/first', booksController.getFirstBook);
//http://localhost:3000/last
router.get('/last', booksController.getLastBook);

//router.get('/book/author/:author', booksController.getAuthorBook)

module.exports = router;