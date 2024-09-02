import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const url = app_config.backend_url;

  const userForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    createdAt: new Date(),
  };

  const navigate = useNavigate();

  const formSubmit = (formdata) => {
    console.log(formdata);

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);

          Swal.fire({
            icon: "success",
            title: "Registered Successfully!!",
          });
          navigate("/main/login");
        });
      }
    });
  };

  return (
    <div style={styles.container} >
      <Formik initialValues={userForm} onSubmit={formSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <section className="text-center text-lg-start">
            <div className="container py-4">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card cascading-right">
                    <div className="card-body p-5 shadow-5 text-center">
                      <h2 className="fw-bold mb-5">Sign up now</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="name"
                                onChange={handleChange}
                                value={values.name}
                                className="form-control"
                              />
                              <label className="form-label" for="form3Example1">
                                Full Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                value={values.email}
                                className="form-control"
                              />
                              <label className="form-label" for="form3Example2">
                                Email
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="number"
                            id="mobile"
                            onChange={handleChange}
                            value={values.mobile}
                            className="form-control"
                          />
                          <label className="form-label" for="form3Example3">
                            Phone Number
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            className="form-control"
                          />
                          <label className="form-label" for="form3Example4">
                            Password
                          </label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            checked
                          />
                          <label className="form-check-label" for="form2Example33">
                            Subscribe to AutoBlogger
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>

                        
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src="https://www.rev.com/blog/wp-content/uploads/2018/03/Rev-Academic-1.png"
                    className="w-100 rounded-4 shadow-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    background:
      "linear-gradient(to right, #0000009b, #000000ad), url(https://www.rev.com/blog/wp-content/uploads/2018/09/Rev-AudioToText-2.gif)",
    height: "100vh",
    backgroundSize: "cover",
  },
};

export default Signup;
