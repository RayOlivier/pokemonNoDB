const axios = require("axios")
let pokemonList = []

const readList = (req, res) => {
  axios.get("http://pokeapi.co/api/v1/pokemon/?limit=151").then(response => {
    console.log(response.data.objects[3])
    pokemonList = response.data.objects
    res.status(200).json(pokemonList)
  })
}

module.exports = {
  readList
}
