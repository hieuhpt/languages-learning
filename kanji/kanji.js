var Kanji = function () {

};

Kanji.prototype.setId = function (id) {
    this.id = id;
    return this;
};

Kanji.prototype.getId = function () {
    return this.id;
};

Kanji.prototype.setWord = function (word) {
    this.word = word;
    return this;
};

Kanji.prototype.getWord = function () {
    return this.word;
};

Kanji.prototype.setKunyomi = function (kunyomi) {
    this.kunyomi = kunyomi;
    return this;
};

Kanji.prototype.getKunyomi = function () {
    return this.kunyomi;
};

Kanji.prototype.setOnyomi = function (onyomi) {
    this.onyomi = onyomi;
    return this;
};

Kanji.prototype.getOnyomi = function () {
    return this.onyomi;
};

Kanji.prototype.setChineseVietnameseWord = function (chineseVietnameseWord) {
    this.chineseVietnameseWord = chineseVietnameseWord;
    return this;
};

Kanji.prototype.getChineseVietnameseWord = function () {
    return this.chineseVietnameseWord;
};

Kanji.prototype.setVietnameseMeaning = function (vietnameseMeaning) {
    this.vietnameseMeaning = vietnameseMeaning;
    return this;
};

Kanji.prototype.getVietnameseMeaning = function () {
    return this.vietnameseMeaning;
};

Kanji.prototype.toJSON = function () {
    return {
        id: this.getId(),
        word: this.getWord(),
        kunyomi: this.getKunyomi(),
        onyomi: this.getOnyomi(),
        vietnameseMeaning: this.getVietnameseMeaning(),
        chineseVietnameseWord: this.getChineseVietnameseWord()
    };
};

Kanji.makeFromQuery = function (query) {
    var kanji = new Kanji();

    kanji.setWord(query.word)
        .setKunyomi(query.kunyomi)
        .setOnyomi(query.onyomi)
        .setChineseVietnameseWord(query.chineseVietnameseWord)
        .setVietnameseMeaning(query.vietnameseMeaning);

    return kanji;
};

module.exports = Kanji;
