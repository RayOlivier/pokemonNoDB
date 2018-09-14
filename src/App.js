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
      <div className="app">
        <link
          rel="stylesheet"
          href="https://meyerweb.com/eric/tools/css/reset/reset.css"
        />
        <Header />
        <main>
          <DisplayPokemon />
          <SideBar />
        </main>
      </div>
    )
  }
}

export default App
