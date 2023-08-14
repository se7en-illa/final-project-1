//the required npm modules
const db=require("./db");
const express = require("express");
const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");
const pokeBank = require("./pokeBank");


// Initialize the Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
Trainer.hasMany(Pokemon);

(async () => {
  try {
    await db.sync();
    console.log("Models synced with database");
  } catch (error) {
    console.error(error);
  }
})();

app.get("/pokemon", async (req, res) => {
  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});


app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.json(newPokemon);
});

app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update(req.body);
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`serving is listening on port ${PORT}`)
});