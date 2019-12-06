const express = require('express');
const db = require("../data/helpers/actionModel");
const projectDB = require('../data/helpers/projectModel');

const router = express.Router();

const ProjIdValidate = (req,res,next)=>{
    const id = req.body.project_id;

    projectDB.get(id)
    .then(prj=>{
        if(prj===null){
            res.status(404).json({message:"the project id you gave me does not exist"})
        }else{
            next();
        }
    })
    .catch(err=>[
        res.status(500).json({err})
    ])
    
}

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

router.post('/',ProjIdValidate, (req,res)=>{
    const action = req.body;
    
    db.insert(action)
    .then((action)=>{
        res.status(201).json({action})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const changes = req.body;
    db.update(id,changes)
    .then((action)=>{
        res.status(201).json({action})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    db.remove(id)
    .then(()=>{
        res.status(201).json({message:"thing has been removed"})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

module.exports = router;
