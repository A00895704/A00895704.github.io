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
        if(data.length >0){
            return res.json(JSON.parse(data));
        } else{
            return res.json([]);
        }
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