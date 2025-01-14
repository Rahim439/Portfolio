import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800">
      <div className="container px-4 py-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white sm:text-3xl">
            Rahim Chaudhary
          </Link>
          <div className="items-center hidden space-x-6 md:flex">
            <NavLinks />
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
          <div className="flex items-center md:hidden">
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 ml-4 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-blue-600 md:hidden dark:bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile }) => {
  const location = useLocation();
  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          text={link.text}
          active={location.pathname === link.to}
          mobile={mobile}
        />
      ))}
    </>
  );
};

const NavLink = ({ to, text, active, mobile }) => {
  const baseClasses = "font-medium transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 rounded-md text-base";
  const desktopClasses = "text-sm px-3 py-2 rounded-md";
  const activeClasses = "bg-blue-600 dark:bg-blue-700 text-white";
  const inactiveClasses =
    "text-blue-100 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white";

  const classes = `${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${
    active ? activeClasses : inactiveClasses
  }`;

  return (
    <Link to={to} className={classes}>
      {text}
    </Link>
  );
};

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 text-white transition-colors duration-200 bg-blue-600 rounded-full dark:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
  >
    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

export default Header;
