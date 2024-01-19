import express from 'express'
const booksRouter = express.Router();
import Books from '../controllers/BooksController.js';
import AddBooks from '../controllers/AddBooksController.js';

booksRouter.get('/cs', Books.cs)
booksRouter.put('/cs', Books.updateCs)


booksRouter.get('/ece', Books.ece)
booksRouter.put('/ece', Books.updateEce)
booksRouter.get('/ce', Books.ce)
booksRouter.put('/ce', Books.updateCe)

booksRouter.get('/me', Books.me)
booksRouter.put('/me', Books.updateMe)

booksRouter.get('/bt', Books.bt)
booksRouter.put('/bt', Books.updateBt)

booksRouter.get('/fin', Books.fin)
booksRouter.put('/fin', Books.updateFin)

booksRouter.get('/mark', Books.mark)
booksRouter.put('/mark', Books.updateMark)


// Following routes are to add the book to the particular department 
booksRouter.post('/addbook', AddBooks.addBooks)


export default booksRouter;