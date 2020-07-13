const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {User} = require('./../models/user');
const {Todo} = require('./../models/todo');
const {todos, users, populateTodos, populateUsers} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateTodos);

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Washing up';

    request(app)
      .post('/todos')
      .set('x-auth', users[0].tokens[0].token)
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text)
          .toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text})
          .then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e));
      });
  });

  it('should not create a new todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(3);
            done();
          }).catch((e) => done(e));
      })
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  })
})

describe('GET /todos/:id', () => {
  it('should return a result for a valid id that exists', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text)
          .toBe(todos[0].text)
      })
      .end(done);
  });
  it('should return a 404 for a valid id that does NOT exist', (done) => {
    var nonExistent = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${nonExistent}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end(done);

  });
  it('should return a 404 for a valid id that belongs to someone else', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .set('x-auth', users[1].tokens[0].token)
      .expect(404)
      .end(done);
  });
  it('should return a 404 for an invalid id', (done) => {
    request(app)
      .get('/todos/123')
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end(done);
  });
})

describe('DELETE /todos/:id', () => {
  it('should delete the first item', (done) => {
    var hexId = todos[1]._id.toHexString();
    request(app)
      .delete(`/todos/${hexId}`)
      .set('x-auth', users[1].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId)
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId)
          .then((result) => {
            expect(result).toNotExist();
          })
          .then(() => done())
          .catch((e) => done(e));
      });
  })
  it('should return a 404 for a valid id that does NOT exist', (done) => {
    var nonExistent = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${nonExistent}`)
      .set('x-auth', users[1].tokens[0].token)
      .expect(404)
      .end(done);

  });
  it('should return a 404 for a valid id that belongs to someone else', (done) => {
    var hexId = todos[1]._id.toHexString();
    request(app)
      .delete(`/todos/${hexId}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId)
          .then((result) => {
            expect(result).toExist();
          })
          .then(() => done())
          .catch((e) => done(e));
      });
  });
  it('should return a 404 for an invalid id', (done) => {
    request(app)
      .delete('/todos/123')
      .set('x-auth', users[1].tokens[0].token)
      .expect(404)
      .end(done);
  });
})

describe('PATCH /todos/:id', () => {
  it('should update the completed at date', (done) => {
    var hexId = todos[0]._id.toHexString();
    var text = 'walk the big fluffy dog';

    request(app)
      .patch(`/todos/${hexId}`)
      .set('x-auth', users[0].tokens[0].token)
      .send({
        text,
        completed: true
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId)
        expect(res.body.todo.text).toBe(text)
        expect(res.body.todo.completed).toBe(true)
        expect(res.body.todo.completedAt).toBeA('number')
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId)
          .then((result) => {
            expect(result.text).toBe(text)
            expect(result.completed).toBe(true)
            expect(result.completedAt).toBeA('number')
          })
          .then(() => done())
          .catch((e) => done(e));
      });
  });

  it('should reset completed at to null', (done) => {
    var hexId = todos[1]._id.toHexString();
    var text = 'Feed the savage cat';

    request(app)
      .patch(`/todos/${hexId}`)
      .set('x-auth', users[1].tokens[0].token)
      .send({
        text,
        completed: false
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId)
        expect(res.body.todo.text).toBe(text)
        expect(res.body.todo.completed).toBe(false)
        expect(res.body.todo.completedAt).toNotExist()
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId)
          .then((result) => {
            expect(result.text).toBe(text)
            expect(result.completed).toBe(false)
            expect(result.completedAt).toNotExist()
          })
          .then(() => done())
          .catch((e) => done(e));
      });
  });

  it('should fail to patch a todo that belogns to someone else', (done) => {
    var hexId = todos[1]._id.toHexString();
    var text = 'Feed the savage cat';

    request(app)
      .patch(`/todos/${hexId}`)
      .set('x-auth', users[0].tokens[0].token)
      .send({
        text,
        completed: false
      })
      .expect(404)
      .end(done);
  })
});

describe('GET /users/me', () => {
  it('should return user if authenticated', (done) => {
    request(app)
      .get('/users/me')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(users[0]._id.toHexString())
        expect(res.body.email).toBe(users[0].email);
      })
      .end(done);
  });

  it('should return a 401 if not authenticated', (done) => {
    request(app)
      .get('/users/me')
      .expect(401)
      .expect((res) => {
        expect(res.body).toEqual({});
      })
      .end(done);
  });
});

describe('POST /users', () => {
  it('should create a user', (done) => {
    var email = 'tom@ratracejoe.com';
    var password = 'tomPass';

    request(app)
      .post('/users')
      .send({email, password})
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
        expect(res.body._id).toExist();
        expect(res.body.email).toBe(email);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        User.findOne({email})
          .then((user) => {
            expect(user).toExist();
            expect(user.password).toNotBe(password);
            done();
          }).catch((e) => done(e));
      });
  });

  it('should return validation errors if request invalid', (done) => {
    var email = 'bobobob';
    var password = 'fai';

    request(app)
      .post('/users')
      .send({email, password})
      .expect(400)
      .end(done);
  });

  it('should not create user if email in use', (done) => {
    var email = users[0].email;
    var password = 'failPass';

    request(app)
      .post('/users')
      .send({email, password})
      .expect(400)
      .end(done);
  });
});

describe('POST /users/login', () => {
  it('should login with correct credentials', (done) => {
    request(app)
      .post('/users/login')
      .send({
        email: users[1].email,
        password: users[1].password
      })
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
        expect(res.body.email).toBe(users[1].email);
        expect(res.body._id).toBe(users[1]._id.toHexString());
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[1]._id)
          .then((user) => {
            expect(user.tokens.length).toBe(2);
            expect(user.tokens[1]).toInclude({
              access: 'auth',
              token: res.headers['x-auth']
            })
            done();
          }).catch((e) => done(e));
      })
  });
  it('should return 401 with incorrect credentials', (done) => {
    request(app)
      .post('/users/login')
      .send({
        email: users[1].email,
        password: users[1].password + 'a'
      })
      .expect(401)
      .expect((res) => {
        expect(res.headers['x-auth']).toNotExist();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[1]._id)
          .then((user) => {
            expect(user.tokens.length).toBe(1);
            done();
          }).catch((e) => done(e));
      })
  });
});

describe('DELETE /users/me/token', () => {
  it('should logout a user with the correct credentials', (done) => {
    request(app)
      .delete('/users/me/token')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[0]._id)
          .then((user) => {
            expect(user.tokens.length).toBe(0);
            done();
          }).catch((e) => done(e));
      })
  });

  it('should return 401 if invalid logout attempted', (done) => {
    request(app)
      .delete('/users/me/token')
      .set('x-auth', 'abcd')
      .expect(401)
      .end(done);
  });
});
