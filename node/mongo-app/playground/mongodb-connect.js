var {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
var collTodos = 'Todos';
var collUsers = 'Users';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');

  // db.collection(collTodos).insertOne({
  //   text: 'Walk the puppy',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log('Data Added Succesfully', JSON.stringify(result, undefined, 2));
  // });

  db.collection(collUsers).insertOne({
    name: 'Joe Sharp',
    age: 34,
    location: 'Gloucester'
  }, (err, result) => {
    if (err) {
      console.log('Could not add user to database', err);
      return;
    }

    console.log('User added Succesfully', JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  db.close();
});
