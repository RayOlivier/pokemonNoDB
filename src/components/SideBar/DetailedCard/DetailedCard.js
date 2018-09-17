import React, { Component } from "react"
import "./DetailedCard.css"
import axios from "axios"
import Pokeball from "../../Pokeball/Pokeball"

class DetailedCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(this.props.types)
    // let type = this.props.types.forEach(element => {
    //   return element.type.name + " "
    // })
    // let typeVar = this.props.types
    // let onlyNames = []
    // onlyNames.push(typeVar[0].type.name)

    // if (typeVar.length > 1) {
    //   onlyNames.push(typeVar[1].type.name)
    // }

    console.log(this.props.arr)
    return (
      <div className="either-card">
        {this.props.clicked ? (
          <div className="whole-card">
            <h1 className="poke-name">{this.props.name.toUpperCase()}</h1>
            <h1 className="stats">National Index: {this.props.id}</h1>
            <h1 className="stats">
              Height: {this.props.arr.height / 10}m & Weight:{" "}
              {this.props.arr.weight / 10}
              kg
            </h1>
            {/* <h1>Type: {onlyNames} </h1> */}

            <img
              id="artwork"
              src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`}
              alt=""
            />
            <div
              className="add-div"
              onClick={() => this.props.handleAdd(this.props.id)}
            >
              Add to Team
            </div>
          </div>
        ) : (
          <div className="not-clicked">
            <h1>Click a Pokémon...</h1>
            <div className="detailed-pokeball">
              <Pokeball />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default DetailedCard
