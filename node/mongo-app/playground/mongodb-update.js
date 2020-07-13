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
    .findOneAndUpdate({
        _id: new ObjectID("593296ade3d94b228414fdb2")
      }, {
        $set: {
          completed: true
        }
      }, {
        returnOriginal: false
      })
    .then((result) => {
      console.log(result);
    });

  db.collection(collUsers)
    .findOneAndUpdate({
        "_id" : ObjectID("5931aa8a316ca1646663c6dc"),
      }, {
        $inc: {
          age: -9
        },
        $set: {
          name: 'Adele Biggs'
        }
      }, {
        returnOriginal: false
      })
    .then((result) => {
      console.log(result);
    });

  //db.close();
});
