const menuService = require('./menuService');

exports.library = async (req, res, next) => {

    if(!req.user) return res.redirect('/login');

    const meme = await menuService.library(req.user);

    console.log(meme)

    res.render('../component/home/view/home', 
    {
        meme: meme,
        user: req.user,
    });
}
