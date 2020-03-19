const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.get('/artistList', artistController.getAllArtists);
router.get('/artistList/:name', artistController.getArtist);
router.post('/artistList/add', artistController.addArtist);
router.get('/artistList/delete/:id', artistController.deleteArtist);

module.exports = router;