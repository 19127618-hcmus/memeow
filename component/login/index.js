const express = require('express');
const router = express.Router();
const loginController = require('./loginController');
const passport = require('../../middleware/passport');

router.post('/signup', loginController.signup);

router.post('/signin',  function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
    if(err == "blocked"){ return res.redirect('/login?SignIn=blocked'); }
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login?SignIn=wrongPassword'); }

    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/1');
    });

  })(req, res, next);
});

router.get('/logout', loginController.logout);

router.get('/', loginController.index);

module.exports = router;