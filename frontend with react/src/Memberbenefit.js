import React from "react";

function Memberbenefit() {
  document.getElementById(
    "head"
  ).innerHTML += `   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
       <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>  <link rel="stylesheet" type="text/css"  href="memberbenefit.css">  <title>Member Benefits</title>`;

  return (
    <div>
      <div className="top_div">
        <div className="zone">
          {" "}
          <img src="image1/company.png" className="top_image" />
        </div>

        <div className="zone_nav">
          <ul className="nav justify-content-center nav_bar_text_style">
            <li className="nav-item">
              <a className="nav-link active" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ourwork">
                Catalogue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#team">
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
          </ul>
        </div>
      </div>

      <div className="ourwork" id="ourwork">
        {" "}
        Member Benefits
        <p>GET FLAT 20% OFF PLUS OTHER OFFERS AT ALL THE ITEMS IN OUR STORE.</p>
        <p>365 DAYS DISCOUNT.</p>
        <a href="register">
          <button>GET THIS</button>
        </a>
      </div>

      <div className="middle_images_div">
        <div className="zone">
          <h4>Office Furniture</h4>{" "}
          <img src="image1/image1off.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <br /> <img src="image1/image2.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <h4>Living Room Furniture</h4>{" "}
          <img src="image1/imagesliv.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <br /> <img src="image1/Image2liv.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <h4>BedRoom Furniture</h4>{" "}
          <img src="image1/bedroom.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <br /> <img src="image1/bedroom1.jpg" className="middle_images" />
        </div>
      </div>
    </div>
  );
}

export default Memberbenefit;
