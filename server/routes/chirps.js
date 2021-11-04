const express = require('express');
const chirpStore = require('../chirpstore');

let router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = chirpStore.GetChirp(id);
    res.json(chirp);
});

router.get('/', (req, res) => {
    let chirps = chirpStore.GetChirps();
    res.json(chirps);
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;