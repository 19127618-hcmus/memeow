const adminService = require('./adminService');

exports.index = (req,res) => {
    res.render('../component/admin/view/admin');
}

exports.addmeme = (meme) => {
    adminService.addmeme(meme);
}