import React from "react";

function CostumerServiceForm() {
  document.getElementById(
    "head"
  ).innerHTML += `      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
       <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">

     
<link rel="stylesheet" type="text/css"  href="styleCusServiceForm.css">
    <title>Customer Service</title>`;

  return (
    <div>
      <div className="top_div">
        <div className="zone animate__animated animate__bounceInDown">
          {" "}
          <img src="imagecompany.png" className="top_image" />
        </div>
      </div>

      <div>
        <h3>Customer Service Request </h3>
      </div>

      <div className="container">
        <form
          action="file:///C:/Users/kiran/OneDrive/Documents/GitHub/College_Project/Customer%20service/Thank%20you%20page.html"
          method="post"
          action="/../contact"
          name="form_contact"
          onSubmit={(e) => alert("Thank you for your Contacting us")}
        >
          <label htmlFor="fname">
            <h3>First Name</h3>
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
            <h3>Last Name</h3>
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />

          <label htmlFor="Email-id">
            <h3>Email-id</h3>{" "}
          </label>
          <input
            type="text"
            id="Email-id"
            name="Email-id"
            placeholder="Email-id"
            className="form-control input-md"
            required
          />

          <label htmlFor="phonenumber">
            <h3>Phone Number</h3>
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phonenumber"
            className="form-control input-md"
            required
          />

          <label htmlFor="Issue">
            <h3>Issue Related to</h3>
          </label>
          <select
            id="Issue"
            name="Issue"
            className="form-control input-md"
            required
          >
            <option value="australia">Office Furntiure</option>
            <option value="canada">Living Furniture</option>
            <option value="usa">Bedroom furniture</option>
          </select>

          <label htmlFor="subject">
            <h3>Message</h3>
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write your Issue.."
            required
            // style={{ height: "200px" }}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CostumerServiceForm;
