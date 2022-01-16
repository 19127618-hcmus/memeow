const nodemon = require("nodemon");

class loginController{
    // [GET] /
    index(req, res, next){
        res.render('../component/login/view/login',{
            layout: false,
        });
    }
}

module.exports = new loginController();