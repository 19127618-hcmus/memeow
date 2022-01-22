const memeModel = require('../../model/meme');
const userModel = require('../../model/user');

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

exports.addLibrary = async (email, meme) => {
    // console.log(user)
    return await userModel.updateOne(
        {email: email},
        {$push: {"library": meme}});

    // user.library.push(meme);
    // return userModel.save();
}

