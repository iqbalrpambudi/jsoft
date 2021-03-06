import React, { Component } from "react"
import { Route } from "react-router-dom"

import Home from "../page/Home"
import Shop from "../page/Shop"
import Showcase from "../page/Showcase"
import About from "../page/About"
import Footer from "./footer"

import "../style/style.css"
import "../style/responsive.css"

class body extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Shop} />
        <Route path="/showcase" component={Showcase} />
        <Footer />
      </>
    )
  }
}

export default body
