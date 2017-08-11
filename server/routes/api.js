import express from 'express';

import BooksController from '../controllers/booksController';
import UsersController from '../controllers/usersController';
// import { isLoggedIn, notLoggedIn } from '../helpers/user_auth';

const router = express.Router();

router.get('/users/logout', UsersController.logout);

/* Borrow book */
router.post('/users/:userId/books', BooksController.borrow);

/* PUT allow user to return book */
router.put('/users/:userId/books', BooksController.return);

/* GET user borrowed book */
router.get('/users/:userId/books', BooksController.inventory);

/* POST add book */
router.post('/books', BooksController.add);

/* PUT modify book */
router.put('/books/:bookId', BooksController.update);

/* GET retrieve all books */
router.get('/books', BooksController.retrieveAll);

/* GET retrieve single book */
router.get('/books/:bookId', BooksController.retrieve);

/* POST user signup */
router.post('/users/signup', UsersController.signup);

/* POST user signin */
router.post('/users/signin', UsersController.login);

export default router;
