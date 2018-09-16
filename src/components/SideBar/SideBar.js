import React, { Component } from "react"
import axios from "axios"
import "./SideBar.css"
import MyTeam from "./MyTeam/MyTeam"
import DetailedCard from "./DetailedCard/DetailedCard"

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeTeam: [],
      updateStupidComponent: 0
    }

    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(id) {
    console.log(id)
    axios.post(`/api/team`, { id: id })
    // this.setState({ updateStupidComponent: this.state.updateStupidComponent++ })
    axios.get("/api/team").then(res => {
      console.log(res.data)
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

    console.log(this.state.pokeTeam)
    return (
      <div className="sidebar">
        <DetailedCard
          id={this.props.id}
          name={this.props.pokeInfo.name}
          clicked={this.props.clicked}
          handleAdd={this.handleAdd}
        />
        <MyTeam team={this.state.pokeTeam} />
      </div>
    )
  }
}

export default SideBar
