/**
 * Created by DatVT4 on 09/10/15.
 */
module.exports = function (app){
    var index = require('../controllers/index.server.controller');
    app.get('/',index.render);
}