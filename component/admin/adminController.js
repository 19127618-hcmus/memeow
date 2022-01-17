const adminService = require('./adminService');

exports.index = (req, res) => {
    const user = req.user;
    if(!user){
        return res.redirect('/login');
    }
    if(user.role !== 1){
        req.logout();
        return res.redirect('/login?SignIn=notAdmin');

    }
    res.render('../component/admin/view/admin', {
        user: user,
    });
}

exports.addmeme = (meme) => {
    adminService.addmeme(meme);
}