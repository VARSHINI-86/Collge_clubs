import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clubs.css';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
// import  SocialIcon from 'react-social-icons';

const Clubs = () => {
  return (
  <>
    <div className="backrgound-imagess">
      <div className="card">
        <header id="topheader">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container text-uppercase p-2">
              <a className="navbar-brand font-weight-bold text-white" href="#">Life @BMSIT&M</a>
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
        </header>
        <div className="card-body background-imagess  ">
          <div className="clubs-section">
            <section className="clients-feedback" id="clients-feedback-div">
              <div className="container headings text-center">
                <h1 className="text-center font-weight-bold text-capitalize">OUR CLUBS</h1>
                <p className="text-center text-capitalize">
                  BMSIT&M has various Technical, Cultural and Social Clubs
                </p>
              </div>
              <div className="container">
            
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    src="https://media.licdn.com/dms/image/C5603AQGAAez5p6CDcw/profile-displayphoto-shrink_200_200/0/1589475231172?e=2147483647&v=beta&t=AfGdkIL0PXbjgosortPCBeCH4MXP-54m296OCmj-f6w"
                    className="card-img-top"
                    alt="Technical Club"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Technical Club</h5>
                    <p className="card-text">This club focuses on developing technical skills of students.</p>
                    <a href="https://bmsit.ac.in/clubs-associations" className="btn btn-primary">Learn More</a>
                    <div className="social-icons float-right">
                      <a href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" className="text-dark mr-2">
                        <i className="fab fa-linkedin"></i>
                        <CIcon icon={icon.cibLinkedin} size="sm" />
                        {/* <SocialIcon fallback="pinterest" /> */}
                      </a>               
                      <a href="#" className="text-dark mr-2">
                        <i className="fab fa-instagram"></i>
                        <CIcon icon={icon.cibInstagram} size="sm"/>
                      </a>
                      <a href="https://www.facebook.com/bmsit/" className="text-dark">
                        <i className="fab fa-facebook"></i>
                        <CIcon icon={icon.cibFacebook} size="sm"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDB3OP217GQFK92Jv_wON-alQNulkwth62sydV-CYxGnYAmP7j6u6lzDVOACSI8t3Zfs&usqp=CAU"
                    className="card-img-top"
                    alt="Cultural Club"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Cultural Club</h5>
                    <p className="card-text">This club promotes cultural activities and events in the college.</p>
                    <a href="https://bmsit.ac.in/clubs-associations" className="btn btn-primary">Learn More</a>
                    <div className="social-icons float-right">
                      <a href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" className="text-dark mr-2">
                        <i className="fab fa-linkedin"></i>
                        <CIcon icon={icon.cibLinkedin} size="sm" />
                      </a>
                      <a href="#" className="text-dark mr-2">
                        <i className="fab fa-instagram"></i>
                        <CIcon icon={icon.cibInstagram} size="sm"/>
                      </a>
                      <a href="https://www.facebook.com/bmsit/" className="text-dark">
                        <i className="fab fa-facebook"></i>
                        <CIcon icon={icon.cibFacebook} size="sm"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    src="https://media.licdn.com/dms/image/D5622AQE8DXi1Q5uVkg/feedshare-shrink_800/0/1709218565721?e=2147483647&v=beta&t=_GiADByJJwydbzqRqMydHz_Sa4L3RIMtP22p85eOPno"
                    className="card-img-top"
                    alt="Social Club"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Social Club</h5>
                    <p className="card-text">This club focuses on social welfare and community service.</p>
                    <a href="https://bmsit.ac.in/clubs-associations" className="btn btn-primary">Learn More</a>
                    <div className="social-icons float-right">
                      <a href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" className="text-dark mr-2">
                        <i className="fab fa-linkedin"></i>
                        <CIcon icon={icon.cibLinkedin} size="sm" />
                      </a>
                      <a href="#" className="text-dark mr-2">
                        <i className="fab fa-instagram"></i>
                        <CIcon icon={icon.cibInstagram} size="sm"/>
                      </a>
                      <a href="https://www.facebook.com/bmsit/" className="text-dark">
                        <i className="fab fa-facebook"></i>
                        <CIcon icon={icon.cibFacebook} size="sm"/>
                      </a>
                    </div>
                  </div>
                </div>            
              </div>  
             </div>
            </div>
           </section>
          </div>
          </div><br/><br/>
          <section>
          <footer className="footersection" id="footer-div">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 footer-text">
                  <div>
                    <h3>About BMSIT&M</h3>
                    <p>
                      B.M.S. Institute of Technology (Autonomous) is a private engineering college in Yelahanka, Bangalore, India.
                      It was started in 2002 by Bhusanayana Mukundadas Sreenivasaiah Institute of Technology (BMSIT) and is run by the B.M.S. Educational Trust.
                      It is affiliated with Visvesvaraya Technological University and became autonomous in 2020.
                      <a style={{color: '#0000FF'}} href="https://bmsit.ac.in/"> Know More </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 footer-text">
                  <div>
                    <h3>Navigation Links</h3>
                    <ul className="list-unstyled">
                      <li><a style={{color: '#0000FF'}} href="Home.jsx">Home</a></li>
                      <li><a style={{color: '#0000FF'}} href="Clubs.jsx">Clubs</a></li>
                      <li><a style={{color: '#0000FF'}} href="About.jsx">About</a></li>
                      <li><a style={{color: '#0000FF'}} href="Contact.jsx">Contact Us</a></li>
                      <li><a style={{color: '#0000FF'}} href="adminlogin">Admin Login</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 footer-text">
                  <div>
                    {/* Additional content can go here */}
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                {/* Footer bottom content */}
              </div>
            </div>
          </footer>
          </section>
        </div>
      </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
      </>
    );
  };

  export default Clubs;
