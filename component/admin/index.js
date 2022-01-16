const express = require('express');
const router = express.Router();

const adminController = require('./adminController');
const imageUpload = require('../../middleware/multer');

router.get('/', adminController.index);

router.post('/addmeme', imageUpload.single('memeImg'), async (req, res) => {
    console.log(req.file)
    console.log(req.body)

    let memeLink = req.file.path.replace(/\\/gi,'/');
    memeLink = memeLink.slice(7);

    const newMeme = {
        name: req.file.filename,
        tag: req.body.memeTag,
        link: memeLink,
    }

    await adminController.addmeme(newMeme);
    

    res.redirect('/admin');

    }, 
    (error, req, res, next) => {
        res.status(400).send({ error: error.message })
    }
)

module.exports = router;