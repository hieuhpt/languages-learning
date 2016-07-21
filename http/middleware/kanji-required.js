module.exports = function (request, response, next) {
    var id = request.query.id || request.body.id || request.params.id;
    try {
        var kanjiId = request.app.get('mongodb').ObjectID(id);
    } catch (err) {
        return response.status(422).json({
            message: "id  be a single String of 12 bytes or a string of 24 hex characters",
            code: "E_INVALID_ID"
        });
    }

    request.app.get('kanjiCollection').detail(kanjiId).then(function (foundKanji) {
        request.kanji = foundKanji;
        next();
    }).catch(function (error) {
        if (error.message == 'Kanji not found') {
            return response.status(404).json({
                message: "Kanji not existed",
                code: "E_KANJI_NOT_EXISTED"
            });
        }
        return next(error);
    });
};