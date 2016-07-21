var kanjiApiRouter = require('express').Router();
var kanji = require('../../kanji');

kanjiApiRouter.get('/kanji', function (request, response) {
    request.app.get('kanjiCollection')
        .search(kanji.KanjiSearchCondition.makeFromQuery(request.query))
        .then(function (listKanji) {
            response.status(201).json(listKanji);
        });
});

kanjiApiRouter.post('/kanji', function (request, response) {
    request.app.get('kanjiCollection')
        .add(kanji.Kanji.makeFromQuery(request.body)).then(function (newKanji) {
        response.status(201).json(newKanji);
    })
});

module.exports = kanjiApiRouter;
