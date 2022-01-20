const loginService = require('./loginService');


exports.index = (req, res, next) => {
    const reqQuery = req.query;
    console.log(reqQuery.SignIn)

    let signInFail = undefined;
    let signUpFail = undefined;

    if(reqQuery.SignIn === "blocked"){
        signInFail = "Your account has been blocked, contact admin to be resolved!";
    }
    else if(reqQuery.SignIn === "wrongPassword"){
        signInFail = "Your email or password is incorect!";
    }
    else if(reqQuery.SignIn === "notAdmin"){
        signInFail = "Authorized Personnel Only!";
    }

    if(reqQuery.SignUp)
        signUpFail = "The email address was previously registered!";    

    res.render('../component/login/view/login',{
        layout: false,
        signIn: signInFail, 
        signUp: signUpFail,
    });
}

exports.signup = async (req, res, next) => {
    const reqBody = req.body;

    const isInvalidEmail = await loginService.findByEmail(reqBody.SUEmail);

    if(isInvalidEmail) {
        return res.redirect('/login?SignUp=invalidEmail');
    }
    else{
        await loginService.signup(reqBody.SUEmail, reqBody.SUPassword, reqBody.SUFullname );
        return res.redirect('/login');
    }
}

exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/1');
}