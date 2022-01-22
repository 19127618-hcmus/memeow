const memeModel = require('../../model/meme');
const userModel = require('../../model/user');
const pagination = require('../../middleware/pagination');

exports.renderHomeLogin = async (user, perPage, page, searchTag) => {
    let meme = undefined;
    if(!searchTag)
        meme = await pagination.paginationMeme(perPage, page); 
    else
        meme = await memeModel.find({$text: {$search: searchTag}}).lean();

    const objectUser = await userModel.findOne({email: user.email}).lean();
    const lib = objectUser.library;

    const userSaved = [];

    for(let i in meme){
        for(let j in lib){
            if(meme[i].slug == lib[j]){
                // console.log(meme[i])
                meme[i].Saved = 1;
                break;
            }
            else{
                meme[i].Saved = 0;
            }
        }
        userSaved.push(meme[i]);
    }
    return userSaved;
}

exports.renderHome = async (perPage, page, searchTag) => {
    let meme = undefined;
    if(!searchTag)
        meme = await pagination.paginationMeme(perPage, page); 
    else
        meme = await memeModel.find({$text: {$search: searchTag}}).lean();
    return meme;    
}

exports.suggestSearchTag = async () => {
    const memeTag = await memeModel.find({}).select('tag').lean();
    let tag = '';
    for(let i in memeTag){
       tag += memeTag[i].tag + ', ';
    }
    // console.log(tag, '\n')
    let uniqueList = tag.split(', ').filter(function(item, i, allItems){
        return i==allItems.indexOf(item);
    });
    // console.log(uniqueList)
    return uniqueList;
}