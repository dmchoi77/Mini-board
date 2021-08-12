const express = require('express');
const router = express();
const db = require('../config/db');

router.get('/test', (req, res) => {
    db.query('SELECT * FROM table1', (err, data) => {
        if (!err) res.send(data);
        else res.send(err);
    })
})
 
module.exports = router;
