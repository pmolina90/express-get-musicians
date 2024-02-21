const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//TODO: Create a GET /musicians route to return all musicians 


app.get("/musicians", async (req,res) => {
    const musicians =  await Musician.findAll({});
    res.json(musicians);
})

//TASK: In this assignment, create the route for the endpoint GET /musicians/:id which includes a URL parameter “id”. 

app.get('/musicians/:id', async (req,res) =>{
    const parameter = req.params.id;
    const musician = await Musician.findByPk(parameter);
    res.json(musician);
});


// - Create - POST 
app.post("/musicians", async(req,res) =>{
        const musician = await Musician.create(req.body);
   res.json(musician);
});

// -- Updating - PUT
app.put("/musicians/:id", async(req, res) =>{
    const updated = await Musician.update(req.body, {where: {id: req.params.id}});
    console.log(updated);
    res.sendStatus(200);
});

// -- Delete
app.delete('/musicians/:id', async(req,res) =>{
    const deleted = await Musician.destroy({
        where: {id: req.params.id}
    }); res.sendStatus(200);
})

module.exports = app;