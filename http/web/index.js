var webRouter = require('express').Router();
var kanji = require('../../kanji');
var KanjiRequiredMiddware = require('../middleware/kanji-required');

webRouter.get('/kanji/create', function (request, response) {
    response.render('./kanji/create.nj.html');
});

webRouter.post('/kanji', function (request, response) {
    var addingKanji = request.app.get('kanjiCollection')
        .add(kanji.Kanji.makeFromQuery(request.body));
    addingKanji.then(function (newKanji) {
        response.redirect('/kanji/' + newKanji.getId());
    });
});

webRouter.get('/kanji/:id', KanjiRequiredMiddware, function (request, response) {
    response.render('./kanji/detail.nj.html', {kanji: request.kanji});
});

webRouter.get('/kanji', function (request, response) {
    var searchingKanji = request.app.get('kanjiCollection')
        .search(kanji.KanjiSearchCondition.makeFromQuery(request.query));

    searchingKanji.then(function (kanjis) {
        response.render('./kanji/list.nj.html', {kanjis: kanjis});
    });
});

module.exports = webRouter;
