const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

function tryTodoId(id) {
  // Todo.find({
  //   _id: id
  // }).then((todos) => {
  //   console.log('Todos (find)', todos);
  // })
  //
  // Todo.findOne({
  //   _id: id
  // }).then((todo) => {
  //   if (!todo) {
  //     return console.log('Id not found');
  //   }
  //   console.log('Todo (findOne)', todo);
  // })

  if (!ObjectID.isValid(id)) {
    return console.log('Invalid id', id);
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo (findById)', todo);
  }).catch((e) => {
    console.log(e);
  })
}

//tryId('5947ace16cd6a511ac3322fb'); // valid, exists
//tryId('6947ace16cd6a511ac3322fb'); // valid, not exists
//tryTodoId('47ace16cd6a511ac3322fb'); // invalid

function tryUserId(id) {
  if (!ObjectID.isValid(id)) {
    return console.log('Invalid user ID');
  }

  User.findById(id).then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User (findById)', user);
  }, (e) => {
    console.log(e);
  })
}

//tryUserId('5932a26d912fd50eedd9fad2');
//tryUserId('6932a26d912fd50eedd9fad2');
tryUserId('115932a26d912fd50eedd9fad2');
