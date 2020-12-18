import React, { Component } from "react"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in"
import "../style/style.css"
import "../style/responsive.css"
import Win7 from "../assets/products/win7.svg"
import Win8 from "../assets/products/win8.svg"
import Win10 from "../assets/products/win10.svg"
import Ubuntu from "../assets/products/ubuntu.svg"
import Mint from "../assets/products/mint.svg"
import Elementary from "../assets/products/elementary.svg"
import Laptop from "../assets/laptop.svg"

class Home extends Component {
  render() {
    return (
      <main className="site-main">
        <section className="site-banner">
          <div className="container align-self-center text-center">
            <FadeIn>
              <h2 className="display-4 text-uppercase font-weight-bold text-white">
                <Typewriter
                  options={{
                    strings: ["Welcome To JSoft", "Jasa Instalasi PC / Laptop"],
                    delay: 100,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <h5 className=" text-uppercase text-white">Happy Repairing</h5>
            </FadeIn>
          </div>
        </section>

        <section className="brand-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="years-area">
                    <h2 className="p-3 years">Perbaiki Masalah Laptopmu</h2>
                    <div className="lead px-3">
                      <span>Selamat tinggal laptop</span>
                        <Typewriter
                          options={{
                            strings: ["lemot", "virusan", "out date"],
                            delay: 100,
                            autoStart: true,
                            loop: true,
                            cursor:``
                          }}
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row px-3">
                  <div className="col-lg-9">
                    <img src={Laptop} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="years-area">
                    <h2 className="p-3 years">PILIHAN SISTEM OPERASI</h2>
                    <h5 className="lead px-3">
                      Pilihan sistem operasi mulai dari Windows 7, Windows 8,
                      Windows 10, Ubuntu, Mint & Elementary
                    </h5>
                  </div>
                  <Link
                    to="/products"
                    type="button"
                    className="btn button primary-button text-uppercase mx-3"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row px-3">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Win7} alt="Win7" className="img-fluid" />
                      <span>Windows 7</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Win8} alt="Win 8" />
                      <span>Windows 8</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Win10} alt="Ring" />
                      <span>Windows 10</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Ubuntu} alt="Brand-4" />
                      <span>Ubuntu</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Mint} alt="Brand-5 " />
                      <span>Mint</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-brand p-1">
                      <img src={Elementary} alt="Brand-6" />
                      <span>Elementary</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
