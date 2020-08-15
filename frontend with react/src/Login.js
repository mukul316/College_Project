import React from "react";

function Login() {
  document.getElementById(
    "head"
  ).innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="styleLog.css">
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
          <h2 style={{ textAlign: "center" }}>Sign In </h2>
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
            <label htmlFor="exampleInputEmail1">Email </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <hr />
            <input type="submit" value="Login" />

            <div className="hint-text">
              Don't have an account?{" "}
              <a href="/register" className="text-success">
                Register Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
