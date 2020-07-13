var {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
var collTodos = 'Todos';
var collUsers = 'Users';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');

  db.collection(collTodos)
    .find({
      _id: new ObjectID('5931a2907e8e90161ad652be')
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  db.collection(collTodos)
    .find()
    .count()
    .then((count) => {
      console.log('Todos Count:', count);
    }, (err) => {
      console.log('Unable to fetch ToDos', err);
    })

  db.collection(collUsers)
    .find({
      location: 'Gloucester'
    })
    .count()
    .then((count) => {
      console.log('Users in Gloucester Count', count);
    }, (err) => {
      console.log('Unable to fetch users', err);
    })


  //db.close();
});
