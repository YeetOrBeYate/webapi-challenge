const express = require('express');
const db = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    db.get(id)
    .then((action)=>{
        res.status(200).json({action})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.post('/', (req,res)=>{
    const action = req.body;
    db.insert(action)
    .then((action)=>{
        res.status(201).json({action})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

module.exports = router;
