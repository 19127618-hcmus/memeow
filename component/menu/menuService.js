const memeModel = require('../../model/meme')
const userModel = require('../../model/user')

exports.library = async (user) => {
    const meme = await memeModel.find({}).lean();
    const objectUser = await userModel.findOne({email: user.email}).lean();
    const lib = objectUser.library;

    // console.log(lib)
    const userSaved = [];

    for(let i in meme){
        for(let j in lib){
            if(meme[i].slug == lib[j]){
                meme[i].Saved = 1;
                userSaved.push(meme[i]);
                break;
            }
        }
    }
    // console.log(userSaved)

    return userSaved;
}