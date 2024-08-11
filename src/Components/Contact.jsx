import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    mobileno: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }
    if (!formData.emailid) {
      formErrors.emailid = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailid)) {
      formErrors.emailid = 'Email ID is invalid';
    }
    if (!formData.mobileno) {
      formErrors.mobileno = 'Mobile No is required';
    } else if (!/^\d{10}$/.test(formData.mobileno)) {
      formErrors.mobileno = 'Mobile No should be 10 digits';
    }
    if (!formData.message) {
      formErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      formErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log(formData);
    }
  };

  return (
    <div className="background-images">
      <header id="topheader">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container text-uppercase p-2">
            <a className="navbar-brand font-weight-bold text-white" href="Home.html">Life @BMSIT&M</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto text-uppercase">
                <li className="nav-item">
                  <a className="nav-link" href="Home.jsx">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Clubs.jsx">Clubs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About.jsx">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Contact.jsx">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br /><br /><br /><br />
        <div className="container headings text-center">
          <section className="contact-section">
          <h1 className="text-center font-weight-bold text-capitalize">Contact Us</h1>
          <p className="text-center text-capitalize">
            We are here to help and answer any questions you might have.
            We are looking forward to hear from you.
          </p>
          </section>
        </div>
      </header>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="username"
                  name="name"
                  required
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  minLength="3"
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email ID"
                  id="email"
                  name="emailid"
                  required
                  autoComplete="off"
                  value={formData.emailid}
                  onChange={handleChange}
                />
                {errors.emailid && <div className="text-danger">{errors.emailid}</div>}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Mobile No"
                  id="mobileno"
                  name="mobileno"
                  required
                  autoComplete="off"
                  value={formData.mobileno}
                  onChange={handleChange}
                  pattern="^\d{10}$"
                />
                {errors.mobileno && <div className="text-danger">{errors.mobileno}</div>}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Your Message"
                  id="message"
                  name="message"
                  required
                  minLength="10"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="text-danger">{errors.message}</div>}
              </div>
              <div className="d-flex justify-content-center form-button">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
