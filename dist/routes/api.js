'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _booksController = require('../controllers/booksController');

var _booksController2 = _interopRequireDefault(_booksController);

var _usersController = require('../controllers/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { isLoggedIn, notLoggedIn } from '../helpers/user_auth';

var router = _express2.default.Router();

router.get('/users/logout', _usersController2.default.logout);

/* Borrow book */
router.post('/users/:userId/books', _booksController2.default.borrow);

/* PUT allow user to return book */
router.put('/users/:userId/books', _booksController2.default.return);

/* GET user borrowed book */
router.get('/users/:userId/books', _booksController2.default.inventory);

/* POST add book */
router.post('/books', _booksController2.default.add);

/* PUT modify book */
router.put('/books/:bookId', _booksController2.default.update);

/* GET retrieve all books */
router.get('/books', _booksController2.default.retrieveAll);

/* GET retrieve single book */
router.get('/books/:bookId', _booksController2.default.retrieve);

/* POST user signup */
router.post('/users/signup', _usersController2.default.signup);

/* POST user signin */
router.post('/users/signin', _usersController2.default.login);

exports.default = router;
//# sourceMappingURL=api.js.map