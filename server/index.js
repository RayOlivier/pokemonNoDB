const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = 3001,
  myTeamCtrl = require("./controllers/myTeamCtrl"),
  axios = require("axios")
pokemonListCtrl = require("./controllers/pokemonListCtrl")

app.use(bodyParser.json())

app.get("/api/list", pokemonListCtrl.readList)

app.get("/api/team", myTeamCtrl.readTeam)
app.post("/api/team/:national_id", myTeamCtrl.addMember)
app.delete("/api/team/:teamId")
app.put("/api/team/:teamId")

// app.get("/api/list", pokemonListCtrl.readList)

app.listen(port, () => console.log(`PokeServer listening on ${port}`))
