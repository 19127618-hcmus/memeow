const pagination = require('../../middleware/pagination');
const homeService = require('./homeService');

exports.index = async (req, res, next) => {
    let meme = undefined;
    
    const perPage = 12;
    const page = req.params.page || 1;
    const numOfMeme = await pagination.countMeme();
    const pages = Math.ceil(numOfMeme/perPage);

    if(!req.user){
        meme = await homeService.renderHome(perPage, page);
    }
    else{
        meme = await homeService.renderHomeLogin(req.user, perPage, page);
    }
    res.render('../component/home/view/home', 
    {
        meme: meme,
        user: req.user,
        curPage: page,
        pages: pages,
    });
}

// exports.searchTag = async function(req, res){
//     const result = await homeService.searchTag(req.query.searchTag);
//     res.render('../component/home/view/home', {meme: result});
//     console.log('okok')

// }