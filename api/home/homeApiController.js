const homeApiService = require('./homeApiService');
const loginService = require('../../component/login/loginService');


exports.addCopy = async function(req, res) {
    let meme = await homeApiService.findBySlug(req.params.slug);
    const numOfCopy = meme.numOfCopy + Number(req.body.copy);

    meme = await homeApiService.addCopyTime(req.params.slug, numOfCopy);
    res.status(201).json(meme);
}

exports.addSave = async function(req, res) {
    let meme = await homeApiService.findBySlug(req.params.slug);
    
    const numOfSave = meme.numOfSave + Number(req.body.save);
    const userEmail = req.body.userEmail;
    const memeName = req.body.meme;
    
    let user = await loginService.findByEmail(userEmail);
    // console.log(user)

    meme = await homeApiService.addSaveTime(req.params.slug, numOfSave);
    user = await homeApiService.addLibrary(userEmail, memeName);

    res.status(201).json(meme);
}

