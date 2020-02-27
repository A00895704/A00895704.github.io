let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/artistList', (req, res)=>{ 
    fs.readFile('./storage/artistList.txt', (err,data)=>{
        if(err) throw err;
        //console.log(JSON.parse(data));
        return res.json(JSON.parse(data));
    });  
});

app.post('/artistList', (req, res) =>{
    const artist = req.body;
    fs.writeFile('./storage/artistList.txt', JSON.stringify(artist), 'utf8' , (err)=>{
        if(err) throw err;
        return res.sendStatus(200);
    });
});

app.listen(process.env.PORT|| 3000, () => console.log('Server ready'))