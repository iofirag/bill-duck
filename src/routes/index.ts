
// export * as WelcomeRoutes from './welcome.route';



module.exports = (app: any) => {
    // app.use('/user', require('./user.routes'));
    // app.use('/market', require('./market.route'))
    // app.use('/welcome', require('./welcome.route'))
    // set the home page route
    app.get('/', (req: any, res: any) => {
        // ejs render automatically looks in the views folder
        res.render('index');
    });
}