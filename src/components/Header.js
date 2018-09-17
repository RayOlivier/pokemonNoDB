import React from "react"
import "./Header.css"
import Pokeball from "./Pokeball/Pokeball"

export default function Header() {
  return (
    <div className="header" id="header">
      <h1 className="header-text">PokéPage</h1>
      <div className="ball-img">
        <Pokeball />
      </div>
    </div>
  )
}
