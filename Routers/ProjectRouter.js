const express = require('express');
const router = express.Router();

const db = require('../data/helpers/projectModel');

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    db.get(id)
    .then((project)=>{
        res.status(200).json({project})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.post('/', (req,res)=>{
    const body = req.body;

    db.insert(body)
    .then((project)=>{
        res.status(200).json({project})
    })
    .catch((err)=>{
        res.status(500),json({err})
    })
})





module.exports = router;