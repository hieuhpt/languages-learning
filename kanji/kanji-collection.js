var Kanji = require('./kanji');

var KanjiCollection = function (kanjiMongodbCollection) {
    this.collection = kanjiMongodbCollection;
};

KanjiCollection.prototype.add = function (kanji) {
    return this.collection.insertOne({
        word: kanji.getWord(),
        kunyomi: kanji.getKunyomi(),
        onyomi: kanji.getOnyomi(),
        vietnameseMeaning: kanji.getVietnameseMeaning(),
        chineseVietnameseWord: kanji.getChineseVietnameseWord()
    }).then(function (result) {
        kanji.setId(result.insertedId);
        return kanji;
    });
};

KanjiCollection.prototype.edit = function (kanji) {
    return this.collection.updateOne({id: kanji.getId()}, {
        $set: {
            word: kanji.getWord(),
            kunyomi: kanji.getKunyomi(),
            onyomi: kanji.getOnyomi(),
            vietnameseMeaning: kanji.getVietnameseMeaning(),
            chineseVietnameseWord: kanji.getChineseVietnameseWord()
        }
    }).then(function () {
        return kanji;
    });
};

KanjiCollection.prototype.detail = function (id) {
    return this.collection.find({_id: id}).limit(1).toArray().then(function (foundKanjis) {
        if (!foundKanjis.length) {
            throw new Error('Kanji not found');
        }
        return foundKanjis[0];
    }).then(function (foundKanji) {
        return new Kanji()
            .setId(foundKanji._id)
            .setWord(foundKanji.word)
            .setKunyomi(foundKanji.kunyomi)
            .setOnyomi(foundKanji.onyomi)
            .setVietnameseMeaning(foundKanji.vietnameseMeaning)
            .setChineseVietnameseWord(foundKanji.chineseVietnameseWord);
    });
};

KanjiCollection.prototype.search = function (condition) {
    return this.collection.find(condition.toMongoCondition()).toArray();
};

module.exports = KanjiCollection;
