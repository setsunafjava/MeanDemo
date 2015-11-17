/**
 * Created by DatVT4 on 09/10/15.
 */
var User = require('mongoose').model('User');
exports.render = function (req,res){

        res.render('index2',{
            title : "Hello World",
            user: JSON.stringify(req.user)

        });


};
