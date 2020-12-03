import React, { Component } from "react"
import AboutImg from "../assets/innside.jpg"
import Typewriter from "typewriter-effect"
import FadeIn from "react-fade-in"
import "../style/style.css"
import "../style/responsive.css"

class About extends Component {
  render() {
    return (
      <section className="about-area">
        <div className="container-fluid">
          <FadeIn>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-12">
                <div className="about-image pt-5">
                  <img src={AboutImg} alt="About us" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 about-title pl-5">
                <h2 className="text-uppercase pt-5">
                  <span>
                    <Typewriter
                      onInit={typewriter => {
                        typewriter.typeString("Happy Shopping").start()
                      }}
                    />
                  </span>
                </h2>
                <FadeIn delay={4400}>
                  <div className="paragraph py-4 w-75">
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error rerum iure obcaecati vel possimus officia maiores
                      perferendis ut! Quos, perspiciatis.
                    </p>
                    <p className="para">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    )
  }
}

export default About
