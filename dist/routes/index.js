"use strict";
// export * as WelcomeRoutes from './welcome.route';
module.exports = function (app) {
    // app.use('/user', require('./user.routes'));
    // app.use('/market', require('./market.route'))
    // app.use('/welcome', require('./welcome.route'))
    // set the home page route
    app.get('/', function (req, res) {
        // ejs render automatically looks in the views folder
        res.render('index');
    });
};
//# sourceMappingURL=index.js.map