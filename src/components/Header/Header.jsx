import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="navbar fixed">
      <div className="container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <Link to="/creator">Creators</Link>
              </li>
              <li>
                <Link to="/study">Case Study</Link>
              </li>
              
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="lg:w-[25%] btn-ghost" alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex  lg:items-center">
          <ul className="menu  text-white text-[17px] font-semibold menu-horizontal px-1">
            <li>
              <Link to="/creator" className="hover:bg-transparent active:bg-transparent">Creators</Link>
            </li>
            <li>
              <Link to="/study" className="hover:bg-transparent active:bg-transparent">Case Study</Link>
            </li>
            
          </ul>
          <div className="">
            <Link to='#' className="px-[25px] py-[10px] border-2 text-primary font-semibold border-primary rounded bg-inherit">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
