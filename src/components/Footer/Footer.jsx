import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto flex justify-between pt-[120px] pb-[60px]">
        <div>
          <p className="text-[17px] font-bold">Headquarters:</p>
          <p className="text-[17px] font-bold">
            1 new Layout, Benin City, Nigeria
          </p>
          <br />
          <p className="text-[17px] font-bold">patners@creatorsideology.com</p>
        </div>
        <div className="text-end">
          <div className="flex gap-[20px] pb-[10px] justify-end">
            <FaInstagram className="text-[30px] hover:text-primary transition duration-300" />
            <FaLinkedinIn className="text-[30px] hover:text-primary transition duration-300" />
          </div>

          <p className="text-[17px] font-bold">Our Privacy Policy</p>
          <br />
          <p className="text-[17px] font-bold">
            All Rights Reserved. © 2024 Creators Ideology
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
