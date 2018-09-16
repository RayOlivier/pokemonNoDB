const axios = require("axios")
// const bodyParser = require("body-parser")

let pokemonList = []
let myTeam = []
let id = 0

// app.use(bodyParser.json())

const readList = (req, res) => {
  axios.get("http://pokeapi.co/api/v1/pokemon/?limit=151").then(response => {
    console.log(response.data.objects[3])
    pokemonList = response.data.objects
    res.status(200).json(pokemonList)
  })
}

module.exports = {
  readList,
  readPokemon(req, res) {
    // console.log(req.params.id)
    axios
      .get(`http://pokeapi.co/api/v2/pokemon/${req.params.id}`)
      .then(response => {
        // console.log(response.data)
        res.status(200).json(response.data)
      })
  },

  readTeam(req, res) {
    return res.status(200).json(myTeam)
  },

  updateTeam(req, res) {},

  addMember(req, res) {
    console.log(req.body)
    myTeam.push(
      pokemonList.find(obj => {
        return obj.national_id === req.body.id
      })
    )
    console.log(myTeam)
    res.status(200)
  },

  deleteMember(req, res) {}
}
