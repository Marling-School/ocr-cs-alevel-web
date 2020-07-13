var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var meUser = new User({
  name: 'Joe Sharp',
  age: 34,
  email: 'ratracejoe@hotmail.com'
})

meUser.save().then((doc) => {
  console.log('Saved User', doc)
}, (err) => {
  console.log('Could not save user', err);
})

var newToDo = new Todo({
  text: 'Walk Dog'
});

newToDo.save().then((doc) => {
  console.log('Saved ToDo', doc);
}, (e) => {
  console.log('Unable to save', e);
});

var secondToDo = new Todo({
  text: 'Dance the night away',
  completed: true,
  completedAt: new Date().getTime()
})

secondToDo.save().then((doc) => {
  console.log('Saved 2nd ToDo', doc);
}, (err) => {
  console.log('Unable to save', err);
})
