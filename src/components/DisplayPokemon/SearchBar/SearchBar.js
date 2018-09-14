import React, { Component } from "react"
import Input from "./Input"
import "./SearchBar.css"

class SearchBar extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ""
    }

    this.changeInput = this.changeInput.bind(this)
  }

  changeInput(e) {
    this.setState({ userInput: e })
    console.log(this.state.userInput)
  }

  render() {
    return (
      <div className="search-header">
        <h3>Search Bar</h3>
        <Input search={this.changeInput} input={this.state.userInput} />
      </div>
    )
  }
}

export default SearchBar
