import React from "react";

function IndexEasy() {
  document.getElementById(
    "head"
  ).innerHTML += `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
    <link rel="stylesheet" type="text/css"  href="style.css">
    <title>Easy Furniture</title>`;

  return (
    <div>
      <div className="modal fade" id="loginModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Login here</h4>
            </div>
            <div className="modal-body">
              <div className="container" style={{ width: "100%" }}>
                <form action="/action_page.php">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginpwd"
                      placeholder="Enter password"
                      name="pwd"
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    id="loginButton"
                    className="btn btn-default"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="signupmodal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Signup here</h4>
            </div>
            <div className="modal-body">
              <div className="container" style={{ width: "100%" }}>
                <form action="/action_page.php">
                  <div className="form-group">
                    <label htmlFor="email">Firstname:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstnameSignup"
                      placeholder="Enter Firstname"
                      name="Firstname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Lastname:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="LastnameSignup"
                      placeholder="Enter Lastname"
                      name="Lastname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="EmailSingup"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">age:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="AgeSignup"
                      placeholder="Enter age"
                      name="age"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="PwdSignup"
                      placeholder="Enter password"
                      name="pwd"
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    id="SignButton"
                    className="btn btn-default"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="first_div">
        <button
          type="button"
          className="btn btn-primary btn-sm animate__animated animate__flash"
          data-toggle="modal"
          data-target="#loginModal"
        >
          Sign In
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm animate__animated animate__flash"
          data-toggle="modal"
          data-target="#signupmodal"
        >
          Sign Up
        </button>
      </div>

      <div className="top_div">
        <div className="zone animate__animated animate__bounceInDown">
          {" "}
          <img src="images/companyimage1.png" className="top_image" />
        </div>
        <div className="zone_nav animate__animated animate__lightSpeedInRight">
          <ul className="nav justify-content-center nav_bar_text_style">
            <li className="nav-item">
              <a className="nav-link " href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="catalogueform1">
                Catalouge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="customerserviceform">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Flyer.jpg">
                Flyer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="memberbenefit">
                Member Benefits
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ourwork" id="ct">
        {" "}
        Our work
        <p>
          Our portfolio is the best way to show our work, you can see here a big
          range of our work. Check them all and you will find what you are
          looking for.
        </p>
      </div>

      <div className="middle_images_div">
        <div className="zone">
          {" "}
          <img src="images/OfficeImage1.jpg" className="middle_images" />
        </div>
        <div className="zone">
          {" "}
          <img src="images/OfficeImage2.jpg" className="middle_images" />
        </div>
        <div className="zone">
          {" "}
          <img src="images/image4.jpg" className="middle_images" />
        </div>
        <div className="zone">
          {" "}
          <img src="images/image3%20(1).jpg" className="middle_images" />
        </div>
      </div>
      <div className="OurTeam_Div" id="team">
        <h2>OUR Team</h2>
      </div>
      <div className="OurTeamBelow_Div">
        <div className="zone">
          <img src="images/kiran.jpg" className="TeamImages" />
          <div
            className="zone"
            style={{ backgroundColor: " rgb(240,240,240)" }}
          >
            <div>
              <h3>Kiran</h3>
            </div>
            <div>CEO</div>
            <div>
              <p>This is my journey as Web designer</p>{" "}
            </div>
          </div>
        </div>
        <div className="zone">
          <img src="images/mukul.jpg" className="TeamImages" />
          <div
            className="zone"
            style={{ backgroundColor: " rgb(240,240,240)" }}
          >
            <div>
              <h3>Mukul Sharma</h3>
            </div>
            <div>CEO</div>
            <div>
              <p>This is my journey as CEO</p>
            </div>
          </div>
        </div>
        <div className="zone">
          <img src="images/nagma.jpg" className="TeamImages" />
          <div
            className="zone"
            style={{ backgroundColor: " rgb(240,240,240)" }}
          >
            <div>
              <h3>Nagma</h3>
            </div>
            <div>Marketing</div>
            <div>
              <p>This is my journey as CEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Contact_Div" id="contact">
        <h2>Contact Us</h2>
      </div>

      <div className="Contact_below_Div">
        <p>
          If you have some Questions or need Help! Please Contact Us! We make
          Cool and Clean Design for your Business
        </p>
      </div>

      <form action="" method="post" id="my-form">
        <input
          type="namec"
          placeholder="Enter your name"
          id="fnamec"
          name="fnamec"
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="emailc"
          id="emailc"
        />
        <label htmlFor="story" style={{ marginLeft: "15px" }}>
          Tell us your query:
        </label>

        <textarea id="story" name="story" rows="5" cols="33"></textarea>
        <button type="button" id="contactUsButton">
          Send query
        </button>
      </form>

      <div className="Contact_Div">
        <h2>Location</h2>
      </div>

      <div className="location_div">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.734485778323!2d-89.25116568481539!3d48.42324153920118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d592191b087b243%3A0xc3c84ebab646161b!2s94%20Beaver%20Ct%2C%20Thunder%20Bay%2C%20ON%20P7B%204J7!5e0!3m2!1sen!2sca!4v1594429462399!5m2!1sen!2sca"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: "1px solid blue" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <footer>
        <p>
          Author: Mukul Sharma
          <br /> Kirandeep Kaur <br /> Nagma Ansari{" "}
        </p>
      </footer>
    </div>
  );
}

export default IndexEasy;
