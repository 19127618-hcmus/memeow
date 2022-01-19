const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const loginService = require('../component/login/loginService');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await loginService.findByEmail(username)

        if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }

        const isValid = await loginService.validPassword(password, user)

        if (!isValid) {
            return done(null, false, {message: 'Incorrect password.'});
        }

        if(user.status === 0){
            return done('blocked', false, {message: 'blocked!'});
        }

        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    // console.log(user);
    done(null, {
        email: user.email,
        fullname: user.fullname,
        phone: user.phone,
        status: user.status,
        role: user.role,
        coin: user.coin,
        avatar: user.avatar,
        library: user.library,
    });
});

passport.deserializeUser(async function(user, done) {
    done(null, user);
});


module.exports = passport;