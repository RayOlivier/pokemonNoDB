let myTeam = []
let id = 0

module.exports = {
  readTeam(req, res) {
    return res.status(200).json(myTeam)
  },

  updateTeam(req, res) {},

  addMember(req, res) {},

  deleteMember(req, res) {}
}
