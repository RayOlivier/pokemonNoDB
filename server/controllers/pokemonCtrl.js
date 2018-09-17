const axios = require("axios")
// const bodyParser = require("body-parser")

let pokemonList = []
let myTeam = []
let id = 0

// app.use(bodyParser.json())

const readList = (req, res) => {
  axios.get("http://pokeapi.co/api/v1/pokemon/?limit=140").then(response => {
    // console.log(response.data.objects[3])
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

  addMember(req, res) {
    // console.log(req.body)
    if (myTeam.length < 6) {
      myTeam.push(
        pokemonList.find(obj => {
          return obj.national_id === req.body.id
        })
      )
    }

    // console.log(myTeam.length)
    res.status(200)
  },

  updateTeam(req, res) {
    // console.log(req.params)
    let mover = myTeam.splice(req.params.teamIndex, 1)
    // console.log(myTeam.length)
    myTeam.unshift(mover[0])
    // console.log(myTeam[0].name)
    res.status(200)
  },

  deleteMember(req, res) {
    // console.log(req.params)
    myTeam.splice(req.params.teamIndex, 1)
    // console.log(myTeam)
    res.status(200)
  }
}
