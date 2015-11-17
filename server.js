/**
 * Created by DatVT4 on 09/10/15.
 */

process.env.NODE_EVN = process.env.NODE_EVN || 'development';
var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport'),
    socket = require('./app/routes/socket.server.routes.js') ;
var db = mongoose();
var app = express();
var passport = passport();
var server = require('http').createServer(app),
    io = require('socket.io').listen(server);
io.sockets.on('connection', socket);

server.listen(3000,function(err){
    console.log('Listening 3000....');

});
module.exports = app;

