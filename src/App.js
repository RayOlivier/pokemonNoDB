import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import axios from "axios"
import DisplayPokemon from "./components/DisplayPokemon/DisplayPokemon"

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonList: []
    }
  }

  // componentDidMount() {
  //   axios.get(`http:/localhost:3001/api/list`).then(res => {
  //     this.setState({ pokemonList: res })
  //   })
  // }

  render() {
    return (
      <div>
        <Header />
        <div>
          {/* {this.state.pokemonList[3]} */}
          Test
        </div>
        <DisplayPokemon />
        {/* <SideBar /> */}
      </div>
    )
  }
}

export default App
