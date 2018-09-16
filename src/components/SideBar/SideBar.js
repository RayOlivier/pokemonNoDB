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
  }
  handleAdd(id) {
    console.log(id)
    axios.post(`/api/team`, { id: id })
  }

  render() {
    return (
      <div className="sidebar">
        <DetailedCard
          id={this.props.id}
          name={this.props.pokeInfo.name}
          clicked={this.props.clicked}
          handleAdd={this.handleAdd}
        />
        <MyTeam />
      </div>
    )
  }
}

export default SideBar
