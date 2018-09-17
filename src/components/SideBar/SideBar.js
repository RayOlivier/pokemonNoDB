import React, { Component } from "react"
import axios from "axios"
import "./SideBar.css"
import MyTeam from "./MyTeam/MyTeam"
import DetailedCard from "./DetailedCard/DetailedCard"

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeTeam: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  handleDelete(memberIndex) {
    // console.log(memberIndex)
    axios.delete(`/api/team/${memberIndex}`)
    axios.get("/api/team").then(res => {
      // console.log(res.data)
      this.setState({ pokeTeam: res.data })
    })
  }
  handleMove(memberIndex) {
    // console.log(memberIndex)
    axios.put(`/api/team/${memberIndex}`)
    axios.get("/api/team").then(res => {
      // console.log(res.data)
      this.setState({ pokeTeam: res.data })
    })
  }

  handleAdd(id) {
    // console.log(id)
    axios.post(`/api/team`, { id: id })
    axios.get("/api/team").then(res => {
      // console.log(res.data)
      this.setState({ pokeTeam: res.data })
    })
    // .then(res => {
    //   axios.get("/api/team").then(response => {
    //     console.log(response)
    //   })
    // }))

    //

    //   axios.get("/api/team").then(response => {
    //     console.log(response.data)
    //     this.setState({ pokeTeam: response.data })
    //     console.log(`sidebar pokeTeam: ${this.state.pokeTeam}`)
    //   })
    // })
    // console.log(this.state.pokeTeam)
  }

  render() {
    // console.log(this.state.pokeTeam)

    // console.log(this.props.pokeInfo.types)
    return (
      <div className="sidebar">
        <DetailedCard
          id={this.props.id}
          name={this.props.pokeInfo.name}
          clicked={this.props.clicked}
          handleAdd={this.handleAdd}
          arr={this.props.pokeInfo}
          // types={this.props.pokeInfo.types}
        />
        <MyTeam
          team={this.state.pokeTeam}
          handleDelete={this.handleDelete}
          handleMove={this.handleMove}
        />
      </div>
    )
  }
}

export default SideBar
