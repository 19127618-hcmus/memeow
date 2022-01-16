const memeModel = require('../../model/meme');

exports.addmeme = function(meme){
    return memeModel.create(meme);
}