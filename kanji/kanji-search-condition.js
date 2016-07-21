var KanjiSearchCondition = function () {
};

KanjiSearchCondition.prototype.searchData = {};

KanjiSearchCondition.prototype.haveId = function (id) {
    if (id) {
        this.searchData.id = id;
    }

    return this;
};

KanjiSearchCondition.prototype.haveWord = function (word) {
    if (word) {
        this.searchData.word = word;
    }

    return this;
};

KanjiSearchCondition.prototype.haveKunyomi = function (kunyomi) {
    if (kunyomi) {
        this.searchData.kunyomi = kunyomi;
    }

    return this;
};

KanjiSearchCondition.prototype.haveOnyomi = function (onyomi) {
    if (onyomi) {
        this.searchData.onyomi = onyomi;
    }
    return this;
};

KanjiSearchCondition.prototype.haveVietnameseMeaning = function (vietnameseMeaning) {
    if (vietnameseMeaning) {
        this.searchData.vietnameseMeaning = vietnameseMeaning;
    }
    return this;
};

KanjiSearchCondition.prototype.haveChineseVietnameseWord = function (chineseVietnameseWord) {
    if (chineseVietnameseWord) {
        this.searchData.chineseVietnameseWord = chineseVietnameseWord;
    }
    return this;
};

KanjiSearchCondition.prototype.toMongoCondition = function () {
    return this.searchData;
};

KanjiSearchCondition.makeFromQuery = function (query) {
    var condition = new KanjiSearchCondition();

    condition.haveWord(query.word)
        .haveKunyomi(query.kunyomi)
        .haveOnyomi(query.onyomi)
        .haveChineseVietnameseWord(query.chineseVietnameseWord)
        .haveVietnameseMeaning(query.vietnameseMeaning);
    return condition;
};

module.exports = KanjiSearchCondition;
