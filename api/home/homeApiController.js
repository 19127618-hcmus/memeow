const homeApiService = require('./homeApiService');

exports.addCopy = async function(req, res) {
    let meme = await homeApiService.findBySlug(req.params.slug);
    const numOfCopy = meme.copy + Number(req.body.copy);

    meme = await homeApiService.addCopyTime(req.params.slug, numOfCopy);
    res.status(201).json(meme);
}

exports.addSave = async function(req, res) {
    let meme = await homeApiService.findBySlug(req.params.slug);
    const numOfSave = meme.save + Number(req.body.save);

    meme = await homeApiService.addSaveTime(req.params.slug, numOfSave);
    res.status(201).json(meme);
}