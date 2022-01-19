const memeModel = require('../../model/meme');
const userModel = require('../../model/user');

exports.renderHomeLogin = async (user) => {
    const meme = await memeModel.find({}).lean();
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
exports.renderHome = async () => {
    return await memeModel.find({}).lean();
    
}