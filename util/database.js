const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    console.log("Attemping connection!")
  MongoClient.connect(
    'mongodb+srv://root:root@cluster0.f6yfzpz.mongodb.net/?retryWrites=true&w=majority'
  )
  
    .then(client => {
      console.log('Connected!');
      _db = client.db('WebApplication');
      callback();
    })
    .catch(err => {
        console.log("DB Connection Failed!")
      console.log(err);
      throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
