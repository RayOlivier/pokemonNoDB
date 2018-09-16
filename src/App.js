import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import axios from "axios"
import DisplayPokemon from "./components/DisplayPokemon/DisplayPokemon"
import SideBar from "./components/SideBar/SideBar"

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonList: [],
      cardId: null,
      pokeInfo: [],
      clicked: false
    }

    this.handlePokeCardClick = this.handlePokeCardClick.bind(this)
  }

  // componentDidMount() {
  //   axios.get(`http:/localhost:3001/api/list`).then(res => {
  //     this.setState({ pokemonList: res })
  //   })
  // }

  handlePokeCardClick(id) {
    // this.setState({ cardId: id })
    // console.log("APP ID after click: " + this.state.cardId)
    axios.get(`/api/pokemon/${id}`).then(res => {
      // console.log(res.data)
      this.setState({ pokeInfo: res.data, cardId: id, clicked: true })
    })
  }

  render() {
    // console.log(
    //   `APP POKEINFO AFTER CLICK: ${JSON.stringify(this.state.pokeInfo)}`
    // )
    return (
      <div className="app">
        <link
          rel="stylesheet"
          href="https://meyerweb.com/eric/tools/css/reset/reset.css"
        />
        <Header />
        <main>
          <DisplayPokemon handlePokeCardClick={this.handlePokeCardClick} />
          <SideBar
            id={this.state.cardId}
            pokeInfo={this.state.pokeInfo}
            clicked={this.state.clicked}
          />
        </main>
      </div>
    )
  }
}

export default App
