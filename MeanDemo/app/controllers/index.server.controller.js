/**
 * Created by DatVT4 on 09/10/15.
 */
exports.render = function (req,res){
     if(req.session.lastVisit){
         console.log(req.session.lastVisit);
     }
    req.session.lastVisit = new Date();
    if(!req.user){
        return res.redirect('/');
    }else {

        res.render('index',{
            title : "Hello World",
            user: JSON.stringify(req.user)

        });
    }

};
