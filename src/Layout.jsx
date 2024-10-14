// Layout.jsx
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; // Import Footer
import { Outlet } from "react-router-dom"; // Import Outlet

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
