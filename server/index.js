const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = 3001

app.use(bodyParser.json())

const BASE_URL = "https://pokeapi.co"

app.listen(port, () => console.log(`Listening on ${port}`))
