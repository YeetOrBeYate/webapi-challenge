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

router.put('/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    db.update(id,body)
    .then((project)=>{
        res.status(200).json({project})

    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.delete('/:id', (req,res)=>{
    const id =req.params.id;

    db.remove(id)
    .then(()=>{
        res.status(201).json({message:'project removed'})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.get("/:id/actions", (req,res)=>{
    const id = req.params.id;

    db.getProjectActions(id)
    .then((actions)=>{
        res.status(200).json({actions})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})





module.exports = router;