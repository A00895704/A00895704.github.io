let db = require('../database/db');

const sqlFilter = "Select * from artists where lower(name) like '%' || $1 || '%'";

function addArtist(e){
    db.query("Insert into artists(name, about, url) values ('"+ e.artistName + "','"+ e.artistAbout+"','"+e.artistURL +"')");    
}

function getAllArtists(){
    return db.query('Select * from artists');
}

function getArtists(name){
    return db.query('Select * from artists where name =' + name);
}

function deleteArtist(id){
    db.query('delete from artists where artist_id=' + id);
}

function getArtistsFiltered(filter){
    return db.query(sqlFilter, [filter.toLowerCase()]);
}

module.exports = {
    addartist: addArtist,
    getall: getAllArtists,
    getartist: getArtists,
    deleteartist: deleteArtist,
    getartistsfiltered: getArtistsFiltered
}