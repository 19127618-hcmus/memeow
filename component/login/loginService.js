const userModel = require('../../model/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

function makePasswork(pass){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pass, salt);

    return hash;
}

exports.findByEmail = (email) => {
    return userModel.findOne({email: email});
}

exports.validPassword = (password, user) => {
    return bcrypt.compare(password,user.password);
};

exports.signup = async (email, password, fullname) => {
    const pass = makePasswork(password);

    const newUser = {
        email: email,
        password: pass,
        fullname: fullname,
    }
    // console.log(newUser);

    return await userModel.create(newUser);
}