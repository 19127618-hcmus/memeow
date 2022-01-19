const user = require('../../model/user');
const homeService = require('./homeService');

exports.index = async (req, res, next) => {
    let meme = undefined;
    if(!req.user)
        meme = await homeService.renderHome();
    else{
        meme = await homeService.renderHomeLogin(req.user);
    }
    // console.log(req.user)
    res.render('../component/home/view/home', 
    {
        meme: meme,
        user: req.user,
    });
}
