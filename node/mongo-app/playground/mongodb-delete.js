var {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
var collTodos = 'Todos';
var collUsers = 'Users';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');

  // db.collection(collTodos).deleteMany({
  //   text: 'Eat lunch'
  // }).then((results) => {
  //   console.log('Deleted Items', results);
  // }, (err) => {
  //
  // });

  // db.collection(collTodos).deleteOne({
  //   text: 'Eat lunch'
  // }).then((results) => {
  //   console.log('Deleted Items', results);
  // }, (err) => {
  //
  // });

  // db.collection(collTodos).findOneAndDelete({
  //   completed: false
  // }).then((results) => {
  //   console.log('Deleted Items', results);
  // }, (err) => {
  //
  // });

  // console.log('Deleting all users called Tom Sharp');
  // db.collection(collUsers).deleteMany({
  //   name: 'Tom Sharp'
  // }).then((results) => {
  //   console.log(results);
  // }, (err) => {
  //   console.log('ERROR:', err);
  // })

  console.log('Deleting specific record');
  db.collection(collUsers).findOneAndDelete({
    _id: new ObjectID("5931aafd316ca1646663c6f6")
  }).then((results) => {
    console.log(results);
  }, (err) => {
    console.log('ERROR:', err);
  })

  //db.close();
});
