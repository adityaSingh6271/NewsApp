import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Importing Navbar component
import News from "./News"; // Importing News component
import Footer from "./Footer"; // Importing Footer component

export default function App() {
  // State for managing dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      {/* Main container for the entire app */}
      <div
        style={{
          // Dynamically set background color and text color based on dark mode state
          backgroundColor: isDarkMode ? "#111927" : "white",
          color: isDarkMode ? "white" : "black",
          minHeight: "100vh", // Set minimum height to 100% of viewport height
        }}
      >
        {/* Navbar component */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {/* Main content area */}
        <div
          style={{
            // Dynamically set background color based on dark mode state
            backgroundColor: isDarkMode ? "#111927" : "transparent",
            // Smooth transition for background color change
            transition: "background-color 0.5s ease",
            padding: "20px", // Add padding for content area
            minHeight:
              "calc(100vh - 56px)" /* 56px is the height of the navbar */, // Subtract navbar height from viewport height
          }}
        >
          {/* Routing for different pages */}
          <Routes>
            {/* Route for the home page */}
            <Route
              exact
              path="/"
              element={<News pageSize={6} country="in" category="general" />}
            />
            {/* Routes for different categories */}
            <Route
              exact
              path="/category/business"
              element={<News pageSize={6} country="in" category="business" />}
            />
            <Route
              exact
              path="/category/entertainment"
              element={
                <News pageSize={6} country="in" category="entertainment" />
              }
            />
            <Route
              exact
              path="/category/general"
              element={<News pageSize={6} country="in" category="general" />}
            />
            <Route
              exact
              path="/category/health"
              element={<News pageSize={6} country="in" category="health" />}
            />
            <Route
              exact
              path="/category/science"
              element={<News pageSize={6} country="in" category="science" />}
            />
            <Route
              exact
              path="/category/sports"
              element={<News pageSize={6} country="in" category="sports" />}
            />
            <Route
              exact
              path="/category/technology"
              element={<News pageSize={6} country="in" category="technology" />}
            />
          </Routes>
        </div>
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}
