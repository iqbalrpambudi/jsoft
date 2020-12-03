import React, { Component } from "react"
import Heart from "../assets/heart.gif"
import "../style/style.css"
import "../style/responsive.css"

class footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="">
              <div className="copyrights text-center">
                <p className="para">
                  <span>©2020 JSoft | Made with </span>
                  <img src={Heart} width="25px" alt="heart" />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default footer
