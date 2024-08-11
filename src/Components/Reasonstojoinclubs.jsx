import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reasontojoinclubs.css";

const Reasonstojoinclubs = () => {
  return (
    <div className="back-image">
      {/* Header Section */}
      <div className="header" id="topheader">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container text-uppercase p-2">
            <a className="navbar-brand font-weight-bold text-white" href="Home.html">Life @BMSIT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto text-uppercase">
                <li className="nav-item">
                  <a className="nav-link" href="Home.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Clubs.html">Clubs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* First Section */}
        <section className="header-section">
          <div className="center-div">
            <h1 className="font-weight-bold text-uppercase">Why to join clubs?</h1>
            <p className="text-capitalize">Here are few more reasons why you should join our college clubs...</p>
          </div>
        </section>
      </div>

      {/* Third Section */}
      <section className="services-offered" id="services-offered-div">
        <div className="container headings text-center">
          <h1 className="text-center font-weight-bold text-uppercase">Reasons to join Clubs</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1 service-div">
              <div className="row">
                <p>
                  Studying in university can be challenging. With an enormous amount of classes, seminars, lecture tutorials and exams life can be harsh and lonely.
                  You may find yourself away from the community, friends and social groups.
                  <br /><br />These feelings can overwhelm you and your struggle in making new friends.
                  However, if you join a club, the process of making friends is not something that difficult.
                </p>
              </div><br />

              {[
                {
                  icon: "fa-check-circle-o",
                  title: "You will learn how to work with a team.",
                  text: "Knowing how to work well with a team is an essential skill for any career. Being in a student organization teaches you how to do this by putting you in situations where you are required to take advice from others, as well as give your own."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will get networking opportunities.",
                  text: "Another great benefit of clubs is that you get the opportunity to network. Meeting new students, making connections, and building relationships will all help down the line when you are looking for a job. Because you are all part of the same organization, you know the people you are meeting have at least a few of the same interests as you, so their connections will be valuable. Many of our organizations are professionally-focused and host several events with alumni or panel discussions with local professionals. These events are excellent opportunities for the student leaders, and can often lead to potential internship or employment opportunities in the future!"
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will gain practical experience in a safe environment.",
                  text: "Participating in a club or an organization based around your particular area of study will give you practical experience within that field. And what is great about student clubs is that while you learn to use skills like project management, event planning, and fundraising, you get to test them out in a safe environment where making mistakes is OK. Everyone is there to support you, so there is no fear in messing up or being wrong."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will be able to use the skills you have learned in class.",
                  text: "As business students, you are able to apply classroom experience in your student organizations, and also develop leadership and life skills that help you become more effective in classroom team projects. Being part of an organization allows you to put all of those things you have been learning in class to the test in real-world situations. You will get to learn what works and what does not, and you will be able to take that knowledge back to the classroom, and then, of course, along with you in a future career."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will get a break from your studies.",
                  text: "Concentrating on schoolwork is obviously important during a graduate program, but giving your mind a break is necessary (and beneficial). While taking part in club activities, you will be able to socialize with like-minded individuals and actually learn as much from them as you would your schoolwork."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will expand your resume.",
                  text: "There is no arguing that organizations and activities look good on a resume. Showing employers that you participated in, or (better yet) lead, a student organization, they will know that you are hard working and can handle multiple responsibilities."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will be able to give back to the community.",
                  text: "Many student organizations provide opportunities to give back to the community, whether through acts of service, sponsoring events, or hosting charity drives. Not only is this good for society, but it will teach you how a future business can give back, too. Giving back to the community is the most rewarding part of being involved. The most rewarding aspect of being involved in a student organization is that you get to give back to the student community through fun events, giving them networking opportunities and offering them a chance to have fun with their peers. This adds an immense value to the learning experience."
                },
                {
                  icon: "fa-check-circle-o",
                  title: "You will have fun!",
                  text: "Another simple reason to join a student organization is to have fun. Meeting new people, making new friends, and participating in activities will help you make the most of your graduate school experience."
                }
              ].map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-2 col-2 service-icons">
                    <i className={`fa-3x fa ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-10 col-10">
                    <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
                  <a style={{ color: "#0000FF" }} href="https://bmsit.ac.in/"> Know More </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footer-text">
              <div>
                <h3>Navigation Links</h3>
                <ul>
                  <li><a style={{ color: "#0000FF" }} href="Home.html">Home</a></li>
                  <li><a style={{ color: "#0000FF" }} href="Clubs.html">Clubs</a></li>
                  <li><a style={{ color: "#0000FF" }} href="About.html">About</a></li>
                  <li><a style={{ color: "#0000FF" }} href="Contact.html">Contact Us</a></li>
                  <li><a style={{ color: "#0000FF" }} href="Home.html">Go to Top</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 footer-text">
              <div>
                <h3>Follow us on</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <ul className="social-icons">
                        <li><a href="https://www.facebook.com/BMSITOFFICIAL/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/bmsitofficial"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/bmsit_bangalore/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/school/bmsit-bangalore/"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p>&copy;2022 BMSIT&M. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reasonstojoinclubs;
