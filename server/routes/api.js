import express from 'express';

import BooksController from '../controllers/booksController';
import UsersController from '../controllers/usersController';
// import { isLoggedIn, notLoggedIn } from '../helpers/user_auth';

const router = express.Router();

/* POST add book */
router.post('/books', BooksController.add);

export default router;
