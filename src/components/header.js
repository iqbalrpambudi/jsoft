import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../style/style.css"
import "../style/responsive.css"

class header extends Component {
  render() {
    return (
      <header className="header_area shadow-sm">
        <div className="main-menu">
          <nav id="nav1" className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <h3>
                  <span className="text-primary">J</span>SOFT
                </h3>
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
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link font-weight-light">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/showcase" className="nav-link font-weight-light">
                      Showcase
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                  <Link to="/contact" className="nav-link font-weight-light">
                    Contact
                  </Link>
                </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default header
