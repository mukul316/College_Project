import React from "react";

function CatalogueForm1() {
  document.getElementById(
    "head"
  ).innerHTML += ` <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
       <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
      
      
<link rel="stylesheet" type="text/css"  href="styleCatForm1.css">

  
     

    <title>Catalogue</title>`;

  return (
    <div>
      <div id="like_button_container"></div>

      <div className="top_div">
        <div className="zone animate__animated animate__bounceInDown">
          {" "}
          <img src="image1/company.png" className="top_image" />
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
            <li className="nav-item">
              <a className="nav-link" href="memberbenefit">
                Member Benefits
              </a>
            </li>
          </ul>
        </div>
      </div>

      <marquee behavior="scroll" direction="left">
        <img src="image1/source.gif" width="125" height="82" alt="Flying Bat" />
      </marquee>

      <div className="ourwork" id="ourwork">
        {" "}
        Catalogue
        <p>
          Our catalogue is the best way to show our work, you can see here a big
          range of our work. Check them all and you will find what you are
          looking for.
        </p>
      </div>

      <div className="middle_images_div">
        <div className="zone">
          {" "}
          <div className="main" id="section1">
            {" "}
            <marquee behavior="scroll" direction="left">
              <h3>Office Furniture</h3>{" "}
            </marquee>
            <img src="image1/image1off.jpg" className="middle_images" />
          </div>
        </div>
        <div className="zone">
          <br />
          <marquee behavior="scroll" direction="left"></marquee>{" "}
          <img src="image1/image2.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <marquee behavior="scroll" direction="left">
            <h3>Living Room Furniture</h3>
          </marquee>{" "}
          <img src="image1/imagesliv.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <br />
          <marquee behavior="scroll" direction="left"></marquee>{" "}
          <img src="image1/Image2liv.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <marquee behavior="scroll" direction="left">
            <h3>BedRoom Furniture</h3>{" "}
          </marquee>
          <img src="image1/bedroom.jpg" className="middle_images" />
        </div>
        <div className="zone">
          <br />
          <marquee behavior="scroll" direction="left"></marquee>{" "}
          <img src="image1/bedroom1.jpg" className="middle_images" />
        </div>
      </div>

      <div className="myDiv">
        <h3 id="flip"> Order Catalogue</h3>
        <div id="panel">Get Free Catalogue</div>
      </div>
      <div className="container">
        <form
          action="file:///C:/Users/kiran/OneDrive/Documents/GitHub/College_Project/catalogue/Thank%20you%20page.html"
          method="post"
          action="/../contact"
          name="form_contact"
          onSubmit={(e) => alert("Thank you for your Contacting us")}
        >
          <div className="row">
            <div className="col-20">
              <label htmlFor="fname">
                <h4>
                  First Name
                  <b />
                </h4>
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                className="form-control input-md"
                required
              />

              <label htmlFor="lname">
                <h4>
                  Last Name
                  <b />
                </h4>
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                className="form-control input-md"
                required
              />

              <label htmlFor="Email-id">
                <h4>
                  <b>Email-id</b>
                </h4>
              </label>
              <input
                type="text"
                id="Email-id"
                name="Email-id"
                placeholder="Your Email-id"
                className="form-control input-md"
                required
              />

              <label htmlFor="catalogue">
                <h4>
                  <b>Catalogue Type</b>
                </h4>
              </label>
              <select
                id="catalogue"
                name="catalogue Type"
                className="form-control input-md"
                required
              >
                <option value="Office">Office </option>
                <option value="Living">Living Room</option>
                <option value="Bedroom">Bedroom</option>
              </select>

              <label htmlFor="subject">
                <h4>
                  <b>Subject</b>
                </h4>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                // style={{ height: "200px", width: "150px" }}
                className="form-control input-md"
                required
              ></textarea>

              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="Newsletter"
              />
              <label htmlFor="checkbox">
                <h4> Please click to receive the Newsletter</h4>
              </label>
              <br />

              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CatalogueForm1;
