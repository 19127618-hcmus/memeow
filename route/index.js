const admin = require('../component/admin');
const login = require('../component/login');
const home = require('../component/home');
const api = require('../api/index');

function route(app){
    app.use('/api', api);
    app.use('/admin', admin);
    app.use('/login', login);
    app.use('/', home);
}
module.exports = route;