import React, { useState } from "react"
import FadeIn from "react-fade-in"
import Typewriter from "typewriter-effect"
import Win7 from "../assets/products/win7.svg"
import Win8 from "../assets/products/win8.svg"
import Win10 from "../assets/products/win10.svg"
import Ubuntu from "../assets/products/ubuntu.svg"
import Mint from "../assets/products/mint.svg"
import Elementary from "../assets/products/elementary.svg"

function Shop(props) {
  const [os, setOs] = useState("windows 7")
  const [software, setSoftware] = useState("minimalist")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = `Halo kak, saya ingin install ulang sistem operasi ${os} dengan software ${software}`
    data.replace(" ", "%20")
    window.open(
      `https://api.whatsapp.com/send?phone=6285655638843&text=${data}`
    )
  }

  return (
    <FadeIn>
      <main className="site-main">
        <section className="project-area">
          <div className="container">
            <div className="project-title pb-5">
              <h3 className="text-uppercase title-h1">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Daftar Menu")
                      .pauseFor(2000)
                      .deleteChars(13)
                      .typeString("Silahkan isi menu berikut")
                      .start()
                  }}
                />
              </h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4 className="mb-4">Install OS + Software</h4>
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Pilih OS
                          <i class="fas fa-angle-down float-right m-1"></i>
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="list-group" id="list-os" role="tablist">
                          <a
                            class="list-group-item list-group-item-action active"
                            id="win7"
                            data-toggle="list"
                            href="#win7"
                            role="tab"
                            aria-controls="win7"
                            onClick={() => setOs("windows 7")}
                          >
                            Windows 7{" "}
                            <img
                              src={Win7}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="win8"
                            data-toggle="list"
                            href="#win8"
                            role="tab"
                            aria-controls="win8"
                            onClick={() => setOs("windows 8")}
                          >
                            Windows 8{" "}
                            <img
                              src={Win8}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="win10"
                            data-toggle="list"
                            href="#win10"
                            role="tab"
                            aria-controls="win10"
                            onClick={() => setOs("windows 10")}
                          >
                            Windwos 10{" "}
                            <img
                              src={Win10}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="ubuntu"
                            data-toggle="list"
                            href="#ubuntu"
                            role="tab"
                            aria-controls="ubuntu"
                            onClick={() => setOs("ubuntu")}
                          >
                            Ubuntu{" "}
                            <img
                              src={Ubuntu}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="mint"
                            data-toggle="list"
                            href="#mint"
                            role="tab"
                            aria-controls="mint"
                            onClick={() => setOs("Mint")}
                          >
                            Mint{" "}
                            <img
                              src={Mint}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="elementary"
                            data-toggle="list"
                            href="#elementary"
                            role="tab"
                            aria-controls="elementary"
                            onClick={() => setOs("Elementary")}
                          >
                            Elementary{" "}
                            <img
                              src={Elementary}
                              style={{ width: `25px`, float: `right` }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Pilih Software{" "}
                          <i class="fas fa-angle-down float-right m-1"></i>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div
                          class="list-group"
                          id="list-software"
                          role="tablist"
                        >
                          <a
                            class="list-group-item list-group-item-action active"
                            id="minimalist"
                            data-toggle="list"
                            href="#minimalist"
                            role="tab"
                            aria-controls="minimalist"
                            onClick={() => setSoftware("minimalis")}
                          >
                            Minimalist
                            <i class="fas fa-info-circle float-right"></i>
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="standard"
                            data-toggle="list"
                            href="#standard"
                            role="tab"
                            aria-controls="standard"
                            onClick={() => setSoftware("standar")}
                          >
                            Standard
                          </a>
                          <a
                            class="list-group-item list-group-item-action"
                            id="fullset"
                            data-toggle="list"
                            href="#fullset"
                            role="tab"
                            aria-controls="fullset"
                            onClick={() => setSoftware("fullset")}
                          >
                            Fullset
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Catatan Tambahan{" "}
                          <i class="fas fa-angle-down float-right m-1"></i>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          class="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex p-3 justify-content-center">
                    <button
                      href="#"
                      type="button"
                      className="btn button primary-button text-uppercase mx-3"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
              <h2>Install Software</h2>
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Pilih Software{" "}
                        <i class="fas fa-angle-down float-right m-1"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse1"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="list-group" id="list-software" role="tablist">
                        <a
                          class="list-group-item list-group-item-action active"
                          id="minimalist"
                          data-toggle="list"
                          href="#minimalist"
                          role="tab"
                          aria-controls="minimalist"
                          onClick={() => setSoftware("1")}
                        >
                          Minimalist
                          <i class="fas fa-info-circle float-right"></i>
                        </a>
                        <a
                          class="list-group-item list-group-item-action"
                          id="standard"
                          data-toggle="list"
                          href="#standard"
                          role="tab"
                          aria-controls="standard"
                          onClick={() => setSoftware("2")}
                        >
                          Standard
                        </a>
                        <a
                          class="list-group-item list-group-item-action"
                          id="fullset"
                          data-toggle="list"
                          href="#fullset"
                          role="tab"
                          aria-controls="fullset"
                          onClick={() => setSoftware("3")}
                        >
                          Fullset
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse2"
                        aria-expanded="true"
                        aria-controls="collapse2"
                      >
                        Catatan Tambahan{" "}
                        <i class="fas fa-angle-down float-right m-1"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse2"
                    class="collapse"
                    aria-labelledby="heading2"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-3 justify-content-center">
                  <button
                    type="button"
                    className="btn button primary-button text-uppercase mx-3"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  )
}

export default Shop
