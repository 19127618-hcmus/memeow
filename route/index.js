const admin = require('../component/admin');
const login = require('../component/login');
const home = require('../component/home');

function route(app){
    app.use('/admin', admin);
    app.use('/login', login);
    app.use('/', home);
}
module.exports = route;