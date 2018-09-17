import React from "react"
import "./PokeCard.css"

export default function PokeCard(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.handleClick(props.id)
      }}
    >
      {/* <img src={`https://pokeapi.co/media/img/${props.id}.png`} /> */}
      {/* <img src={"/api/image"} /> */}
      {/* <h4>#{props.id}</h4> */}
      <img
        src={`https://img.pokemondb.net/sprites/x-y/normal/${props.name.toLowerCase()}.png`}
        alt={props.id}
      />
      <h5>{props.name}</h5>
    </div>
  )
}
