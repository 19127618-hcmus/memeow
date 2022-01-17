const user = require('../../model/user');
const homeService = require('./homeService');

exports.index = async (req, res, next) => {
    const meme = await homeService.renderHome();
    // console.log(req.user)
    res.render('../component/home/view/home', 
    {
        meme: meme,
        user: req.user,
    });
}
