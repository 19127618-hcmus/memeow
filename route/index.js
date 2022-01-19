const admin = require('../component/admin');
const login = require('../component/login');
const home = require('../component/home');
const menu = require('../component/menu');
const api = require('../api/index');

function route(app){
    app.use('/api', api);
    app.use('/admin', admin);
    app.use('/login', login);
    app.use('/menu', menu);
    app.use('/', home);
}
module.exports = route;