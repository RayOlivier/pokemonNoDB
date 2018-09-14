import React, { Component } from "react"

function Input(props) {
  return (
    <div>
      <input
        className="inputBar"
        value={props.input}
        placeholder={`Search...`}
        onChange={e => props.search(e.target.value)}
      />
    </div>
  )
}

export default Input
