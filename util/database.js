const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://saroj:9kiX8py7BzNbVgSI@node-sgx7x.mongodb.net/shop?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
    )
    .then((client) => {
        console.log('connected..');
        _db = client.db();
        callback();
    })
    .catch((err) => {console.log(err)})
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database Found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
