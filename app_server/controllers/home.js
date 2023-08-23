module.exports.home=(req,res)=>{
    res.render('home-list',{title:'Home'});
};
module.exports.styleinfo1=(req,res)=>{
    res.render('west',{title:'Western Style'});
};
module.exports.styleinfo2=(req,res)=>{
    res.render('indi',{title:'Indian Style'});
};
module.exports.styleinfo3=(req,res)=>{
    res.render('indowest',{title:'Indo Western Style'});
};
module.exports.styleinfo4=(req,res)=>{
    res.render('casual',{title:'Casual Style'});
};
module.exports.styleinfo5=(req,res)=>{
    res.render('street',{title:'Street Style'});
};