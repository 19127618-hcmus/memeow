const memeModel = require('../../model/meme');
const userModel = require('../../model/user');
const pagination = require('../../middleware/pagination');

exports.renderHomeLogin = async (user, perPage, page) => {
    const meme = await pagination.paginationMeme(perPage, page); 
    const objectUser = await userModel.findOne({email: user.email}).lean();
    const lib = objectUser.library;

    const userSaved = [];

    for(let i in meme){
        for(let j in lib){
            if(meme[i].slug == lib[j]){
                // console.log(meme[i])
                meme[i].saved = 1;
                break;
            }
            else{
                meme[i].saved = 0;
            }
        }
        userSaved.push(meme[i]);
    }
    return userSaved;
}

exports.renderHome = async (perPage, page) => {
    return await pagination.paginationMeme(perPage, page);    
}

// exports.searchTag = (tag) => {
//     return memeModel.find({$text: {$search: tag}}).lean();
// }