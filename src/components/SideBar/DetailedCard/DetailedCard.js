import React, { Component } from "react"
import "./DetailedCard.css"
import axios from "axios"

class DetailedCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(this.props.clicked)
    return (
      <div className="either-card">
        {this.props.clicked ? (
          <div className="whole-card">
            <h1>National Index: {this.props.id}</h1>
            <h2>{this.props.name.toUpperCase()}</h2>
            <img
              id="artwork"
              src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`}
              alt=""
            />
            <button onClick={() => this.props.handleAdd(this.props.id)}>
              Add to Team
            </button>
          </div>
        ) : (
          <div className="not-clicked">
            Click a Pokemon for more information....
          </div>
        )}
      </div>
    )
  }
}

export default DetailedCard
