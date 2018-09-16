import React, { Component } from "react"
import axios from "axios"
import "./SideBar.css"
import MyTeam from "./MyTeam/MyTeam"
import DetailedCard from "./DetailedCard/DetailedCard"

class SideBar extends Component {
  // componentWillReceiveProps() {
  //   axios.get(`/api/pokemon/${this.props.id}`).then(res => {
  //     console.log(res.data)
  //     this.setState({ pokeInfo: res.data })
  //   })
  // }
  render() {
    // let newPokemon = (
    //   <DetailedCard name={this.state.pokeInfo.name} id={this.props.id} />
    // )

    // console.log(`SIDEBAR POKEINFO: ${JSON.stringify(this.state.pokeInfo)}`)

    return (
      <div className="sidebar">
        <DetailedCard
          id={this.props.id}
          name={this.props.pokeInfo.name}
          clicked={this.props.clicked}
        />
        <MyTeam />
      </div>
    )
  }
}

export default SideBar
