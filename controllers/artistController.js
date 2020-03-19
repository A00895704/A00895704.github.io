let artistModel = require('../models/artistData');

exports.getAllArtists = async(req, res, next) =>{
    if(req.query.searchInput){
        const filter = req.query.searchInput;
        data = await artistModel.getartistsfiltered(filter);
        console.log("something");
        return res.render('artist', {artists:data.rows, filter:filter});
    }else{
        console.log("no filter");
        let data = await artistModel.getall();
        res.render('artist', {artists:data.rows});
    }
   
}

exports.addArtist = async(req, res, next)=>{
    let artist = {
        artistName: req.body.name,
        artistAbout: req.body.about,
        artistURL: req.body.url
    };
    console.log(artist);

    await artistModel.addartist(artist);
    return res.redirect(301, '/artistList');
}

exports.getArtist = async(req, res, next)=>{
    let data = await Artist.getartist(req.params.name);
    return res.render('artist', {artists:data.rows});
}

exports.deleteArtist = async(req, res, next)=>{
    await artistModel.deleteartist(req.params.id);
    return res.redirect(301, '/artistList');
}
