import React from "react";

function Register() {
  document.getElementById(
    "head"
  ).innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="styleReg.css">
  `;

  return (
    <div>
      <div className="container">
        <div className="btn-group">
          <a href="/login">
            {" "}
            <button> LogIn</button>
          </a>
          <a href="/register">
            {" "}
            <button> Register</button>
          </a>
        </div>

        <div className="row">
          <h2 style={{ textAlign: "center" }}>Customer Registration</h2>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>

          <div className="col">
            <div className="register-left">
              <h3>Welcome to Easy Furniture</h3>
              <br />
              <p>
                Your one-stop look for accessible design
                <br />
                Shop our new online store.
                <br />
                Discover a piece of art that will change your space!
              </p>
              <br />
              <a href="#" className="fb btn">
                <i className="fa fa-facebook fa-fw"></i> Login with Facebook
              </a>
              <a href="#" className="twitter btn">
                <i className="fa fa-twitter fa-fw"></i> Login with Twitter
              </a>
              <a href="#" className="google btn">
                <i className="fa fa-google fa-fw"></i> Login with Google+
              </a>
            </div>
          </div>

          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>
            <label htmlFor="exampleInputfirstname">First Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name *"
              value=""
              id="fname"
              name="fname"
            />

            <label htmlFor="exampleInputLastname">Last Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name *"
              value=""
              id="lname"
              name="lname"
            />

            <label htmlFor="InputAdress">Address </label>
            <input
              type="text"
              className="form-control"
              placeholder="Address *"
              value=""
              id="address"
              name="address"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
              id="email"
            />

            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
              id="pwd"
              name="pwd"
            />

            <label htmlFor="psw-repeat">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
            <hr />

            <button type="submit" id="subuser" className="registerbtn">
              Register
            </button>

            <p>
              Already have an account? <a href="/login">Sign in</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
