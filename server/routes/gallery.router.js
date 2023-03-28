const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    const queryText = `UPDATE "galleryitems" SET "likes" = "likes" + 1 WHERE "id"=$1`

    pool.query(queryText, [galleryId])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500)
    })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    //console.log(galleryItems)
    //console.log('in server GET')
    const queryText = `SELECT * FROM galleryitems ORDER BY "id"`

    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        res.sendStatus(500);
    })
    
}); // END GET Route

module.exports = router;