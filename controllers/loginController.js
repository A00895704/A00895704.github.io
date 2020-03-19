

exports.get = (req, res)=>{
    console.log("rendering login");
    res.render("login");
}

exports.login = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log("got here");
    if(username.toLowerCase() === 'a00895704' && password === "password"){
        console.log("password accepted");
        res.redirect(301, '/artistList');
    } else{
        console.log("password incorrect");
        return res.render('login', {msg: 'Username or password incorrect'});
    }   
}