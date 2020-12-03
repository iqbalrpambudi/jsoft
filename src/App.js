import React, { Component } from "react"
import Header from "./components/header"
import Body from "./components/body"
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
      </Router>
    )
  }
}
export default App
