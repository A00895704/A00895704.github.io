let express = require('express');
let bodyParser = require('body-parser');
let app = express();
//const fs = require('fs');
//const loginRoute = require('./routes/loginRoute');
const artistRoute = require('./routes/artistRoutes'); 


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine', 'pug');

//app.use(loginRoute);
app.use(artistRoute);
app.get('/', (req, res, next)=>{
    res.redirect(301, '/artistList');
});

app.listen(process.env.PORT|| 3000, () => console.log('Server ready'))