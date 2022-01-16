const memeModel = require('../../model/meme');

exports.renderHome = async () => {
    return await memeModel.find({}).lean();
}