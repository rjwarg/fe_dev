exports.render = function(req,res){
   
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello World V 0.5.0',
        userFullName: req.user ? req.user.fullName : ''
    });
};