import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../style/style.css"
import "../style/responsive.css"
import Logo from "../assets/innside.jpg"

class header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="main-menu">
          <nav
            id="nav1"
            className="navbar navbar-expand-lg navbar-light transparent"
          >
            <Link to="/" className="navbar-brand">
              {/* <img src={Logo} alt="Innside Store" width="100px"></img> */}
              <h3><span className="text-primary">J</span>SOFT</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link font-weight-light">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link font-weight-light">
                    Products
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/about" className="nav-link font-weight-light">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link font-weight-light">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default header
