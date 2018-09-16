// const axios = require("axios")

// let myTeam = []
// let id = 0

// module.exports = {
//   readPokemon(req, res) {
//     console.log(req.params.id)
//     axios
//       .get(`http://pokeapi.co/api/v2/pokemon/${req.params.id}`)
//       .then(response => {
//         // console.log(response.data)
//         res.status(200).json(response.data)
//       })
//   },

//   readTeam(req, res) {
//     return res.status(200).json(myTeam)
//   },

//   updateTeam(req, res) {},

//   addMember(req, res) {
//     console.log(req.body)
//   },

//   deleteMember(req, res) {}
// }
