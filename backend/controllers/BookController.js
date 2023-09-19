const router = require('express').Router();
const BookService = require('../services/BookService');

router.get('/', BookService.getAllBooks);
router.post('/', BookService.saveBook);
router.delete('/:id', BookService.deleteBook);
router.patch('/:id', BookService.updateBook);

module.exports = router;