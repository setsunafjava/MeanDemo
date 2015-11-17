/**
 * Created by DatVT4 on 09/10/15.
 */
/**
 * Created by DatVT4 on 09/10/15.
 */
var users = require('../controllers/users.server.controller.js'),
    passport = require('passport');
module.exports = function(app){
/*    app.route('/users').post(users.create).get(users.list);
    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
    app.param('userId',users.userByID);*/
    app.route('/api/auth/signin').post(users.signin);
    app.route('/signup').get(users.renderSignup).post(users.signup);
    app.route('/signin').get(users.renderSignin).post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
    app.get('/signout', users.signout);
};