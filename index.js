let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
const fs = require('fs');
const ARTIST_STORAGE = './storage/artistList.txt';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/artistList', (req, res)=>{ 
    fs.readFile(ARTIST_STORAGE, (err,data)=>{
        if(err) throw err;
        if(data.length >0){
            return res.json(JSON.parse(data));
        } else{
            return res.json([]);
        }
    });  
});

app.get('/artistList/:searchInput', (req, res)=>{
    const name = req.params.searchInput;
    console.log("Finding:" + name);
    const regex = new RegExp(name, 'i');
    fs.readFile(ARTIST_STORAGE, (err, data)=>{
        if(err) return res.sendStatus(500);
        let artists = JSON.parse(data);
        let filteredArtists= artists.filter(artistObject=>regex.test(artistObject.artistName));
        return res.json(filteredArtists);
    });
});

app.post('/artistList', (req, res) =>{
    const artist = req.body;
    fs.writeFile(ARTIST_STORAGE, JSON.stringify(artist), 'utf-8' , (err)=>{
        if(err) throw err;
        return res.sendStatus(200);
    });
});

app.delete('/artistList/:name', (req, res)=>{
    const name = req.params.name;
    console.log(`deleting ${name}`);
    fs.readFile(ARTIST_STORAGE, (err, data)=>{
        if(err) return res.sendStatus(500);
        let artists = JSON.parse(data);
        let filteredArtists = artists.filter(artistObject=> artistObject.artistName !== name);
        fs.writeFile(ARTIST_STORAGE, JSON.stringify(filteredArtists), 'utf-8',
         err=>{
             if(err) return res.sendStatus(500);
             return res.sendStatus(200);
         })
    });
});

app.listen(process.env.PORT|| 3000, () => console.log('Server ready'))