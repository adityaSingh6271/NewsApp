import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap"; // Import NavDropdown component from react-bootstrap
import NewsMonkeyLogo from "./NewsMonkey.Logo.png"; // Import NewsMonkey logo

export class Navbar extends Component {
  // Function to handle category change
  handleCategoryChange = (category) => {
    window.location.href = `/category/${category}`; // Redirect to category page
  };

  render() {
    const { toggleDarkMode, isDarkMode } = this.props; // Destructure props

    return (
      <nav
        className={`navbar navbar-expand-lg ${
          isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light" // Conditional class based on dark mode state
        }`}
      >
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand" href="/">
            NewsMonkey
            <img
              src={NewsMonkeyLogo}
              alt="NewsMonkey Logo"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                marginLeft: "10px",
              }}
            />
          </a>
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Collapse */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar Nav */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home Link */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              {/* Categories Dropdown */}
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {/* Category Items */}
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("business")}
                >
                  Business
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("entertainment")}
                >
                  Entertainment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("general")}
                >
                  General
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("health")}
                >
                  Health
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("science")}
                >
                  Science
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("sports")}
                >
                  Sports
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.handleCategoryChange("technology")}
                >
                  Technology
                </NavDropdown.Item>
              </NavDropdown>
            </ul>
            {/* Dark Mode Toggle */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={isDarkMode}
                onChange={toggleDarkMode} // Toggle dark mode function
              />
              <label className="form-check-label" htmlFor="darkModeToggle">
                {isDarkMode ? "Dark Mode" : "Light Mode"} {/* Display mode text */}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
