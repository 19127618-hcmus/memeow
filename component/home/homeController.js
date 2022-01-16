const homeService = require('./homeService');

class homeController{
    // [GET] /
    async index(req, res, next){
        const meme = await homeService.renderHome();
        // console.log(meme)
        res.render('../component/home/view/home', 
        {
            meme: meme,
        });
    }
}

module.exports = new homeController();