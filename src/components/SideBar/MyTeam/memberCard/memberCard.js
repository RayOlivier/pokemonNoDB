import React from "react"
import "./MemberCard.css"

export default function memberCard(props) {
  return (
    <div className="whole-member-card">
      Member #{props.number}
      {/* <img
        src={`https://img.pokemondb.net/sprites/x-y/normal/${props.name.toLowerCase()}.png`}
        alt={props.number}
      /> */}
      <h1>{props.member.name}</h1>
      <button>Move to first</button>
      <button>Delete</button>
    </div>
  )
}
