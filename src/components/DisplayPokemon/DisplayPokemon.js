import React, { Component } from "react"
import axios from "axios"

class DisplayPokemon extends Component {
  constructor() {
    super()

    this.state = {
      pokeList: []
    }
  }

  componentDidMount() {
    axios.get("/api/list").then(res => {
      console.log(res)
      this.setState({ pokeList: res.data })
    })
  }

  render() {
    console.log(this.state.pokeList)

    let newList = this.state.pokeList.map((e, i, arr) => {
      return <div key={i}>{e.name}</div>
    })
    return <div>{newList}</div>
  }
}

export default DisplayPokemon
