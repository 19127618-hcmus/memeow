const pagination = require('../../middleware/pagination');
const homeService = require('./homeService');

exports.index = async (req, res, next) => {
    let meme = undefined;
    
    const perPage = 12;
    const page = req.params.page || 1;
    const numOfMeme = await pagination.countMeme();
    const pages = Math.ceil(numOfMeme/perPage);

    const searchTag = req.query.searchTag;

    const suggestTag = await homeService.suggestSearchTag();

    // console.log(req.query)

    if(searchTag){
        if(!req.user){
            meme = await homeService.renderHome(perPage, page, searchTag);
        }
        else{
            meme = await homeService.renderHomeLogin(req.user, perPage, page, searchTag);
        }
        res.render('../component/home/view/home', 
        {
            meme: meme,
            user: req.user,
            suggestTag: suggestTag,
        });
    }

    else{
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
            suggestTag: suggestTag,
        });}
}

exports.test = async (req, res) => {
    const suggestTag = await homeService.suggestSearchTag();
    console.log(suggestTag);
    // res.json(suggestTag);
    res.redirect('/')
}