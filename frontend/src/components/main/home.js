import { Button, Stack } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="preview" className="preview">
      <div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
        >
          <section
            draggable="false"
            className="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section className="mb-10 position-relative">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="svg position-absolute d-none d-lg-block"
                style={{
                  height: "560px",
                  width: "100%",
                  zIndex: "0",
                  overflow: "hidden",
                }}
              >
                <defs>
                  <linearGradient
                    id="sw-gradient-0"
                    x1="0"
                    x2="0"
                    y1="1"
                    y2="0"
                  >
                    <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
                    <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#sw-gradient-0)"
                  d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
                ></path>
              </svg>

              <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="container">
                  <div className="row gx-lg-5 align-items-center">
                    <div
                      className="col-lg-6 mb-5 mb-lg-0"
                      style={{ zIndex: "1" }}
                    >
                      <h1 className="my-5 display-3 fw-bold ls-tight">
                        <span>The best platform</span> <br />
                        <span className="text-primary">for your blogging career</span>
                      </h1>
                      <Stack spacing={2} direction="row">
                      <Button variant="contained" style={{background:"	#181818"}} onClick={(e) => navigate("/main/signup")}>Get Started</Button>
                      
                    <Button variant="contained" color="error" onClick={(e) => navigate("/main/browsing")}>Browse</Button>
                    </Stack>
                    </div>
                    <div
                      className="col-lg-6 mb-5 mb-lg-0"
                      style={{ zIndex: "1" }}
                    >
                      <img
                        src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg="
                        className="w-100 rounded-4 shadow-5"
                        alt=""
                        aria-controls="#picker-editor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
        >
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10">
              <h2 className="fw-bold mb-5 text-center">Blog Samples</h2>
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img
                    src="https://st2.depositphotos.com/4107269/7635/i/600/depositphotos_76358181-stock-photo-messy-workspace-of-freelancer-concept.jpg"
                    className="w-100 shadow-4-strong rounded-4 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Art</h3>
                  <div className="mb-2 text-danger small">
                    <i
                      className="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Business</span>
                  </div>
                  <p className="text-muted">
                  A business is defined as an organization or enterprising entity engaged in commercial, industrial, or professional activities. Businesses can be for-profit entities or non-profit organizations. Business types range from limited liability companies, sole proprietorships, corporations, and partnerships.
                  </p>
                  <p className="text-muted">
                  A business is an organization where people work together. In a business, people work to make and sell products or services. Other people buy the products and services. The business owner is the person who hires people for work. A business can earn a profit for the products and services it offers.
                  </p>
                  <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Start your Blog
                  </a>
                </div>
              </div>
              <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img
                    src="https://media.istockphoto.com/photos/closeup-hands-of-freelancer-woman-working-using-digital-laptop-and-picture-id980838288?b=1&k=20&m=980838288&s=170667a&w=0&h=ZZG3H3jxq8V5P5tRUgcqMol8d_1VJqtwo0ruiZmG_Z8="
                    className="w-100 shadow-4-strong rounded-4 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Exhibition in Paris</h3>
                  <div className="mb-2 text-primary small">
                    <i
                      className="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Art</span>
                  </div>
                  <p className="text-muted">
                  Your exhibition stand needs to attract prospects, leave an impression, and make an impact with visitors. Follow these tips to plan an exhibition stand that helps your business stand out and achieve your marketing goals.   Goals and Audience Before we begin...

read more
                  </p>
                  <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                   Start your Blog
                  </a>
                </div>
              </div>
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img
                    src="https://mdbootstrap.com/img/new/standard/city/079.jpg"
                    className="w-100 shadow-4-strong rounded-4 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Stock market boom</h3>
                  <div className="mb-2 text-warning small">
                    <i
                      className="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Business</span>
                  </div>
                  <p className="text-muted">
                  A business is defined as an organization or enterprising entity engaged in commercial, industrial, or professional activities. Businesses can be for-profit entities or non-profit organizations. Business types range from limited liability companies, sole proprietorships, corporations, and partnerships.
                  </p>
                  <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Start your Blog
                  </a>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10">
              <h2 className="fw-bold mb-5 text-center">Latest articles</h2>
              <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-4-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Welcome to California</h3>
                  <div className="mb-2 text-danger small">
                    <i
                      className="fas fa-globe-americas me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Travels</span>
                  </div>
                  <p className="text-muted">
                  Today is Jerusalem Day, the 55th anniversary of the liberation of the Temple Mount and reunification of the holy city of Jerusalem during the 1967 Six Day War. The day of Jerusalem’s liberation from 19 years of illegal Jordanian occupation was June 7th – the 28th day of the Hebrew month of Iyar, which is today.

                  </p>
                </div>
              </div>
              <div className="row gx-lg-5 align-items-center mb-5 flex-lg-row-reverse">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-4-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Exhibition in Paris</h3>
                  <div className="mb-2 text-primary small">
                    <i
                      className="fas fa-palette me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Art</span>
                  </div>
                  <p className="text-muted">
                  Your exhibition stand needs to attract prospects, leave an impression, and make an impact with visitors. Follow these tips to plan an exhibition stand that helps your business stand out and achieve your marketing goals.   Goals and Audience Before we begin...
                  </p>
                </div>
              </div>
              <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-4-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Stock market boom</h3>
                  <div className="mb-2 text-warning small">
                    <i
                      className="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Business</span>
                  </div>
                  <p className="text-muted">
                  Understand every aspect of the global economy – and know how to make your next move. Get unlimited digital access on Bloomberg.com or The Bloomberg App. Monthly Discount. Unlimited Access. Yearly Discount. Instant Access. Print and Mobile Access. Student Offer.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
        >
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10 text-center">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  <i
                    className="fas fa-cubes fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  ></i>
                  <h5 className="text-primary fw-bold mb-3">5000+</h5>
                  <h6 className="fw-normal mb-0">Components</h6>
                  <hr className="divider-vertical d-none d-md-block" />
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  <i
                    className="fas fa-layer-group fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  ></i>
                  <h5 className="text-primary fw-bold mb-3">490+</h5>
                  <h6 className="fw-normal mb-0">Design blocks</h6>
                  <hr className="divider-vertical d-none d-lg-block" />
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                  <i
                    className="fas fa-image fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  ></i>
                  <h5 className="text-primary fw-bold mb-3">100+</h5>
                  <h6 className="fw-normal mb-0">Templates</h6>
                  <hr className="divider-vertical d-none d-md-block" />
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative">
                  <i
                    className="fas fa-plug fa-3x text-primary mb-4"
                    aria-controls="#picker-editor"
                  ></i>
                  <h5 className="text-primary fw-bold mb-3">28</h5>
                  <h6 className="fw-normal mb-0">Plugins</h6>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
        >
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10 text-center">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <h2 className="fw-bold mb-5">Testimonials</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">Maria Smantha</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">Lisa Cudrow</h5>
                  <h6 className="text-primary mb-3">Graphic Designer</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>
                    <span>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">John Smith</h5>
                  <h6 className="text-primary mb-3">Marketing Specialist</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>
                    <span>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10">
              <div
                className="p-5 bg-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/new/textures/full/284.jpg')",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                aria-controls="#picker-editor"
              ></div>

              <div
                className="card mx-4 mx-md-5 shadow-5-strong"
                style={{
                  marginTop: "-100px",
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body py-5 px-md-5">
                  <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                      <form>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form4Example1"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            for="form4Example1"
                            style={{ marginLeft: "0px" }}
                          >
                            Name
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{ width: "42.4px" }}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form4Example2"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            for="form4Example2"
                            style={{ marginLeft: "0px" }}
                          >
                            Email address
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{ width: "88.8px" }}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <textarea
                            className="form-control"
                            id="form4Example3"
                            rows="4"
                          ></textarea>
                          <label
                            className="form-label"
                            for="form4Example3"
                            style={{ marginLeft: "0px" }}
                          >
                            Message
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{ width: "60px" }}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form4Example4"
                            checked=""
                          />
                          <label
                            className="form-check-label"
                            for="form4Example4"
                          >
                            Send me a copy of this message
                          </label>
                        </div>

                        <button

                        
                       
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                          aria-controls="#picker-editor"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-7 mb-4 mb-md-0">
                      <div className="row gx-lg-5">
                        <div className="col-md-6 mb-5">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-headset fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                ></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Technical support</p>
                              <p className="text-muted mb-0">
                                support@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-dollar-sign fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                ></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Sales questions</p>
                              <p className="text-muted mb-0">
                                sales@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-newspaper fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                ></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Press</p>
                              <p className="text-muted mb-0">
                                press@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-bug fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                ></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Bug report</p>
                              <p className="text-muted mb-0">
                                bugs@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
