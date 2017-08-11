import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import db from '../server/models';

const should = chai.should();
chai.use(chaiHttp);

describe('routes: books', () => {
    describe('/api/books - unauthorized user', () => {
        it('GET /api/books - should respond with 401 for Unauthorized user', (done) => {
            chai.request(server)
                .get('/api/books')
                .end((err, res) => {
                    should.exist(err);
                    res.status.should.equal(401);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('Unauthorized');
                    done();
                });
        });
        it('POST /api/books - should respond with 401 for Unauthorized user', (done) => {
            chai.request(server)
                .post('/api/books')
                .end((err, res) => {
                    should.exist(err);
                    res.status.should.equal(401);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('Unauthorized');
                    done();
                });
        });
        it('PUT /api/books/:bookId - should respond with 401 for Unauthorized user', (done) => {
            chai.request(server)
                .put('/api/books/1')
                .end((err, res) => {
                    should.exist(err);
                    res.status.should.equal(401);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('Unauthorized');
                    done();
                });
        });
    });

    describe('POST /api/users/signup', () => {
        const newUser = {
            username: 'johndoe',
            password: 'abc123',
            email: 'johnd@email.com',
            firstname: 'John',
            lastname: 'Doe'
        };
        it('should respond with success along with newly created user', (done) => {
            chai.request(server)
                .post('/api/users/signup')
                .send(newUser)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(201);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('success');
                });
            done();
        });
    });

    describe('POST /api/users/signin', () => {
        it('should respond with success along with signin user', (done) => {
            chai.request(server)
                .post('/api/users/signin')
                .send({ username: 'johndoe', password: 'abc123' })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    // res.body.status.should.eql('Unauthorized');
                });
            done();
        });
    });

    describe('POST /api/books - authorized user', () => {
        const newBook = {
            isbn: 20177122,
            title: 'This is Andela',
            author: 'John Doe',
            published: '8-10-2017',
            qty: 10
        };
        it('should respond with success along with the newly added book', (done) => {
            chai.request(server)
                .post('/api/users/signin')
                .send({ username: 'johndoe', password: 'abc123' })
                .then(() => {
                    chai.request(server)
                        .post('/api/books')
                        .send(newBook)
                        .end((err, res) => {
                            should.not.exist(err);
                            res.status.should.equal(201);
                            res.type.should.equal('application/json');
                            res.body.status.should.eql('success');
                            res.body.data.should.include.keys(
                                'id',
                                'isbn',
                                'title',
                                'author',
                                'published',
                                'qty',
                                'createdAt',
                                'updatedAt'
                            );
                        });
                });
            done();
        });
    });

    describe('GET /api/books - authorized user', () => {
        it('should respond with an array of all the books', (done) => {
            chai.request(server)
                .post('/api/users/signin')
                .send({ username: 'johndoe', password: 'abc123' })
                .then(() => {
                    chai.request(server)
                        .get('/api/books')
                        .end((err, res) => {
                            should.not.exist(err);
                            res.status.should.equal(200);
                            res.should.be.a('array');
                            res.body.status.should.eql('success');
                        });
                });
            done();
        });
    });

    xdescribe('GET /api/books/:bookId - authorized user', () => {
        it('should respond with a single book', (done) => {
            chai.request(server)
                .post('/api/users/signin')
                .send({ username: 'johndoe', password: 'abc123' })
                .then(() => {
                    chai.request(server)
                        .get('/api/books/')
                        .end((err, res) => {
                            should.not.exist(err);
                            res.status.should.equal(200);
                            res.type.should.equal('application/json');
                            // res.body.status.should.eql('success');
                            res.body.data.should.include.keys(
                                'id',
                                'isbn',
                                'title',
                                'author',
                                'published',
                                'qty',
                                'createdAt',
                                'updatedAt'
                            );
                        });
                });
            done();
        });
    });

    xdescribe('PUT /api/books/:bookId', () => {
        it('should respond with `success` status', (done) => {
            db.Book
                .findAll()
                .then((books) => {
                    const bookObj = books[0];

                    chai.request(server)
                        .post('/api/users/signin')
                        .send({ username: 'johndoe', password: 'abc123' })
                        .then(() => {
                            chai.request(server)
                                .put(`/api/books/${bookObj.id}`)
                                .send({
                                    isbn: 20177122,
                                    title: 'This is Andele Cycle',
                                    author: 'Mary Doe',
                                    published: '16-10-2017',
                                    qty: 8
                                })
                                .end((err, res) => {
                                    // should.not.exist(err);
                                    res.status.should.equal(200);
                                    // res.type.should.equal('application/json');
                                    // res.body.status.should.eql('success');
                                });
                            done();
                        });
                });
        });
    });
});
