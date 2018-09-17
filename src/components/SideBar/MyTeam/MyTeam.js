import React, { Component } from "react"
import "./MyTeam.css"
import MemberCard from "./MemberCard/MemberCard"

class MyTeam extends Component {
  render() {
    let teamArr = this.props.team.map((e, i, arr) => {
      return (
        <MemberCard
          member={e}
          key={i}
          number={i + 1}
          memberIndex={i}
          handleDelete={this.props.handleDelete}
          handleMove={this.props.handleMove}
        />
      )
    })

    return <div className="whole-team">{teamArr}</div>
  }
}

export default MyTeam
