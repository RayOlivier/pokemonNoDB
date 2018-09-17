const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = 3001,
  pokemonCtrl = require("./controllers/pokemonCtrl"),
  axios = require("axios")

app.use(bodyParser.json())

app.get("/api/list", pokemonCtrl.readList)

app.get("/api/pokemon/:id", pokemonCtrl.readPokemon)
app.get("/api/team", pokemonCtrl.readTeam)
app.post("/api/team", pokemonCtrl.addMember)
app.delete("/api/team/:teamIndex", pokemonCtrl.deleteMember)
app.put("/api/team/:teamIndex", pokemonCtrl.updateTeam)

app.listen(port, () => console.log(`PokeServer listening on ${port}`))
