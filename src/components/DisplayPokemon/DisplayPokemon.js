import React, { Component } from "react"
import axios from "axios"
import PokeCard from "./PokeCard/PokeCard"
import "./DisplayPokemon.css"
import SearchBar from "./SearchBar/SearchBar"

class DisplayPokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeList: []
    }
  }

  componentDidMount() {
    axios.get("/api/list").then(res => {
      // console.log(res)
      this.setState({ pokeList: res.data })
    })
  }

  render() {
    // console.log(this.state.pokeList)

    this.state.pokeList.sort((a, b) => {
      return a.national_id - b.national_id
    })
    let newList = this.state.pokeList.map((e, i, arr) => {
      return (
        <PokeCard
          key={i}
          name={e.name}
          id={e.national_id}
          type={e.types}
          handleClick={this.props.handlePokeCardClick}
        />
      )
    })

    return (
      <div className="leftMain">
        <SearchBar />
        <div className="displayList">{newList}</div>
      </div>
    )
  }
}

//TYPES IS AN ARRAY OF OBJECTS

export default DisplayPokemon
