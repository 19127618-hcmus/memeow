const memeModel = require('../../model/meme');

exports.findBySlug = async (slug) => {
    return await memeModel.findOne({slug: slug}).lean();
}

exports.addCopyTime = async (slug, copyTime) => {
    return await memeModel.updateOne(
        {slug: slug},
        {copy: copyTime}
        );
}

exports.addSaveTime = async (slug, saveTime) => {
    return await memeModel.updateOne(
        {slug: slug},
        {save: saveTime}
        );
}