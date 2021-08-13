const express = require('express');
const router = express();
const db = require('../config/db');

router.get('/test', (req, res) => {
    db.query('SELECT * FROM table1', (err, data) => {
        if (!err) res.send(data);
        
        else res.send(err);
    })
})

router.get('/BoardContent', (req,res) => {
    // sql query 문
    const sql = 'SELECT * FROM table1 WHERE idx = ?';
    // 전달받은 parameter 값
    const params = req.query.idx;
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    })
})

const util = require('util')
 
router.post('/BoardUpdate', (req, res) => {
    const sql = 'UPDATE table1 SET title = ?, content = ?, writer = ?, write_date = ? WHERE idx = ?';
    const params = [req.query.title, req.query.content, req.query.writer, req.query.write_date, req.query.idx]
    console.log(`= = =>req ${util.inspect(req.query)}`)
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})
 
router.get('/BoardDelete', (req,res) => {
    const sql = 'DELETE FROM table1 WHERE idx = ?';
    const params = req.query.idx
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

router.post('/BoardInsert', (req,res)=>{
    const sql = 'insert into table1 (title, content, writer, write_date) values (?,?,?,?)';
    const params = [req.query.title, req.query.content, req.query.writer, req.query.write_date];
    console.log(params); 
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

module.exports = router;
