import React from "react"
import "./MemberCard.css"

export default function MemberCard(props) {
  return (
    <div className="whole-member-card">
      Member #{props.number}
      <img
        className="member-image"
        src={`https://img.pokemondb.net/sprites/x-y/normal/${props.member.name.toLowerCase()}.png`}
        alt={props.number}
      />
      <h1>{props.member.name}</h1>
      <div className="button-container">
        <button
          className="member-button"
          onClick={() => {
            props.handleMove(props.memberIndex)
          }}
        >
          Make 1st
        </button>
        <button
          className="member-button"
          onClick={() => {
            props.handleDelete(props.memberIndex)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
