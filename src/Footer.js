import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#212529", // Set background color for the footer
          color: "white", // Set text color for the footer
          padding: "20px 0", // Add padding to the footer
          fontFamily: "Montserrat, sans-serif", // Set font family for the footer
        }}
      >
        {/* Footer menu section */}
        <div className="footer-menu">
          <h5 className="text-center">singhaditya6271@gmail.com</h5> {/* Email address */}
        </div>
        {/* Footer social media links */}
        <div
          className="footer-social text-center"
          style={{ marginTop: "20px" }}
        >
          {/* Twitter link */}
          <a
            href="https://twitter.com/SinghAditya6271"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "30px" }}
          >
            <i
              className="fab fa-twitter" // Twitter icon
              style={{ color: "white", fontSize: "24px" }} // Style for the icon
            ></i>
          </a>
          {/* Facebook link */}
          <a
            href="https://www.facebook.com/profile.php?id=100007735608923"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "30px" }}
          >
            <i
              className="fab fa-facebook-f" // Facebook icon
              style={{ color: "white", fontSize: "24px" }} // Style for the icon
            ></i>
          </a>
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/_adityasingh08/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "30px" }}
          >
            <i
              className="fab fa-instagram" // Instagram icon
              style={{ color: "white", fontSize: "24px" }} // Style for the icon
            ></i>
          </a>
          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/aditya-singh-84088219b/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "30px" }}
          >
            <i
              className="fab fa-linkedin-in" // LinkedIn icon
              style={{ color: "white", fontSize: "24px" }} // Style for the icon
            ></i>
          </a>
        </div>
        {/* Divider */}
        <hr style={{ backgroundColor: "white" }} />
        {/* Footer attribution */}
        <div className="text-center">
          <p>&copy;All Right Reserved | Designed By Aditya Singh</p> {/* Copyright text */}
        </div>
      </footer>
    );
  }
}

export default Footer;
