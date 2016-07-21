var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var KanjiCollection = require('./kanji/kanji-collection');

module.exports = (function (req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/hieu_test', function (err, connection) {
        req.app.set('mongoConnection', connection);
        req.app.set('mongodb', mongodb);
        req.app.set('kanjiCollection', new KanjiCollection(connection.collection('kanjis')));
        next();
    });
});