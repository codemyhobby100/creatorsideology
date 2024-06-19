import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`navbar fixed w-full z-[999] transition-all duration-300 ${
        scrolled ? "bg-gray-900" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-[150px]" alt="Creators Ideology" />
        </Link>
        <div className="lg:hidden flex items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul className="menu text-white text-[17px] font-semibold menu-horizontal px-1">
            <li>
              <Link
                to="/creator"
                className="hover:bg-transparent active:bg-transparent"
              >
                Creators
              </Link>
            </li>
            <li>
              <Link
                to="/study"
                className="hover:bg-transparent active:bg-transparent"
              >
                Case Study
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="#"
              className="px-[25px] py-[10px] border-2 text-primary font-semibold border-primary rounded bg-inherit"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 z-[999]">
          <ul className="menu text-white p-4">
            <li className="mb-2 ">
              <Link
                to="/creator"
                onClick={toggleMenu}
                className="hover:bg-transparent "
              >
                Creators
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/study"
                onClick={toggleMenu}
                className="hover:bg-transparent active:text-white"
              >
                Case Study
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;