import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 ">
      <footer className="relative container mx-auto h-auto p-12 lg:p-0 lg:py-[50px] bg-gray-900 flex  flex-col items-center font-sans">
        <div className="footer-container w-full flex flex-col justify-between lg:flex-row">
          <div className="sec aboutus lg:flex lg:flex-col mr-8 lg:w-1/3 w-full mb-10 lg:mb-0">
            <h2 className="relative text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              At "Creators Ideology," we pride ourselves on being a valuable
              partner to brands, offering them strategic and impactful
              influencer marketing solutions.
            </p>
            <ul className="sci flex my-5">
              <li className="list-none">
                <a
                  href="https://instagram.com/creatorsideology?igshid=MzNlNGNkZWQ4Mg=="
                  className=" w-10 h-10 bg-gray-800 flex justify-center text-white items-center mr-2 rounded transition-all duration-500 hover:bg-yellow-400"
                >
                  <FaInstagram/>
                </a>
              </li>
              <li className="list-none">
                <a
                  href="https://www.linkedin.com/company/creators-ideology/"
                  className=" w-10 h-10 bg-gray-800 flex justify-center text-white items-center mr-2 rounded transition-all duration-500 hover:bg-yellow-400"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks lg:flex lg:flex-col lg:text-center lg:w-1/3 w-full mb-10 lg:mb-0">
            <h2 className="relative text-white mb-4">Quick Links</h2>
            <ul>
              <li className="list-none mb-2">
                <Link
                  to="/"
                  className="text-gray-400 transition-all duration-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/creator"
                  className="text-gray-400 transition-all duration-300 hover:text-white"
                >
                  Creators
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/study"
                  className="text-gray-400 transition-all duration-300 hover:text-white"
                >
                  Case Study
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/contact"
                  className="text-gray-400 transition-all duration-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="sec contactBx lg:flex lg:flex-col md:items-end lg:w-1/3 w-full">
            <h2 className="relative text-white mb-4">Contact Info</h2>
            <ul className="info">
              <li className="md:text-end mb-4">
                <span className="text-white text-lg mr-2">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span className="text-gray-400 text-end">
                  1 New Layout, <br /> Benin City,
                  <br />
                  Nigeria
                </span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-white text-lg mr-2">
                  <i className="fa fa-envelope"></i>
                </span>
                <p className="text-gray-400">
                  <a
                    href="mailto:patners@creatorsideology.com"
                    className="transition-all duration-500 hover:text-white"
                  >
                    Patners@creatorsideology.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray-900 p-2 pt-[40px] text-center text-gray-400">
          <p>Copyright &copy; 2023 Creators Ideology. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
