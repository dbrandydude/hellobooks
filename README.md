# Hellobooks
Hello-Books is a simple application that helps manage a library and its processes like stocking, tracking and renting books. https://dbbooks.herokuapp.com

## Template
To veiw template, [http://dbrandydude.github.io](http://dbrandydude.github.io)
Admin Dashboard - [http://dbrandydude.github.io/admin](http://dbrandydude.github.io/admin)

## API-Routes
[dbbooks.herokuapp.com/api](dbbooks.herokuapp.com/api)
- POST api/users/signup => Signup for new new account

- POST api/users/signin => Signin to application as a user
- POST api/users/:userId/books => Borrow a book
- PUT api/users/:userId/books => Returns borrowed book
- GET api/users/:userId/books => User borrow history by `userId`
- GET api/users/:userId/books?returned=true => Retrieve returned books 
- POST api/books => Adds book to database
- PUT api/books/:bookId => Modify book by `bookId`
- GET api/books => Retrieve all books in the database
- GET api/books/:bookId => Retrive single book by `bookId` 

