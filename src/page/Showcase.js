import React, { useState } from "react"
import FadeIn from "react-fade-in"
import Typewriter from "typewriter-effect"
import Laptop from "../assets/laptop.svg"

function Showcase(props) {
  return (
    <FadeIn>
      <main className="site-main">
        <section className="brand-area" id="win10">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="years-area">
                    <h2 className="p-3 years">Windows 10</h2>
                    <table id="specification">
                      <tr>
                        <td>Prosesor</td>
                        <td>: 1 gigahertz (GHz) atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>RAM</td>
                        <td>: 1 gigabyte (GB) for 32-bit atau 2 GB for 64-bit</td>
                      </tr>
                      <tr>
                        <td>Hard disk</td>
                        <td>: 32 GB untuk 64-bit dan 32-bit</td>
                      </tr>
                      <tr>
                        <td>
                          Graphics card
                        </td>
                        <td>: DirectX 9 atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>
                          Display resolution
                        </td>
                        <td>: 800 x 600</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row px-3">
                  <div className="col-lg-9">
                    <div className="laptop-container">
                      <iframe
                        src="https://www.youtube.com/embed/bD0jywkYCOI"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="brand-area"
          style={{ backgroundColor: `rgb(252, 186, 3)` }}
          id="win8"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="years-area">
                    <h2 className="p-3 years">Windows 8</h2>
                    <table id="specification" class="bordered">
                      <tr>
                        <td>Prosesor</td>
                        <td>: 1 gigahertz (GHz) atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>RAM</td>
                        <td>: 1 gigabyte (GB) for 32-bit atau 2 GB for 64-bit</td>
                      </tr>
                      <tr>
                        <td>Hard disk</td>
                        <td>: 32 GB untuk 64-bit dan 32-bit</td>
                      </tr>
                      <tr>
                        <td>
                          Graphics card
                        </td>
                        <td>: DirectX 9 atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>
                          Display resolution
                        </td>
                        <td>: 800 x 600</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row px-3">
                  <div className="col-lg-9">
                    <div className="laptop-container">
                      <iframe
                        src="https://www.youtube.com/embed/JPmXUdLBy0A"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="brand-area"
          style={{ backgroundColor: `rgb(3, 148, 252)` }}
          id="win8"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="years-area">
                    <h2 className="p-3 years text-white">Windows 7</h2>
                    <table id="specification" class="text-white">
                      <tr>
                        <td>Prosesor</td>
                        <td>: 1 gigahertz (GHz) atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>RAM</td>
                        <td>: 1 gigabyte (GB) for 32-bit atau 2 GB for 64-bit</td>
                      </tr>
                      <tr>
                        <td>Hard disk</td>
                        <td>: 32 GB untuk 64-bit dan 32-bit</td>
                      </tr>
                      <tr>
                        <td>
                          Graphics card
                        </td>
                        <td>: DirectX 9 atau diatasnya</td>
                      </tr>
                      <tr>
                        <td>
                          Display resolution
                        </td>
                        <td>: 800 x 600</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row px-3">
                  <div className="col-lg-9">
                    <div className="laptop-container">
                      <iframe
                        src="https://www.youtube.com/embed/bD0jywkYCOI"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  )
}

export default Showcase
