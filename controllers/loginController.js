

exports.get = (req, res)=>{
    res.render("login");
}

exports.login = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(username.toLowerCase() === 'a00895704' && password === "password"){
        res.redirect(301, '/artistList');
    } else{
        return res.render('login', {msg: 'Username or password incorrect'});
    }   
}