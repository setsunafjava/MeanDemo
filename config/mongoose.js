/**
 * Created by DatVT4 on 09/10/15.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    require('../app/models/user.server.model');
    require('../app/models/article.server.model');
    var db = mongoose.connect(config.db);
    return db;
};