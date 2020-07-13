const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user');
const {Todo} = require('./../../models/todo');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'joe@ratracejoe.com',
    password: 'joePass',
    tokens: [
      {
          access: 'auth',
          token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'kate@ratracejoe.com',
    password: 'katePass',
    tokens: [
      {
          access: 'auth',
          token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
      }
    ]
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: 'Walk dog',
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: 'Feed cat',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  },
  {
    _id: new ObjectID(),
    text: '5k run',
    _creator: userOneId
  }
];

const populateTodos = (done) => {
  Todo
    .remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());

};

const populateUsers = (done) => {
  User.remove({})
    .then(() => {
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne, userTwo]);
    }).then(() => done());
}

module.exports = {
  todos,
  users,
  populateTodos,
  populateUsers
}
