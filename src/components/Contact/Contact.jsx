import React, { useRef } from "react";
import { FaGlobeAfrica, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_jcnd919', 'template_m8vjedc', form.current, 'V16X-XoiUCA4o9BeB')
      .then((result) => {
          Swal.fire({
              icon: 'success',
              title: 'Great!',
              text: 'Your message has been sent successfully',
              footer: '<a href="#">Go home</a>'
            })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}
  return (
    <div className="bg-black my_container min-h-screen">
      <div className=" mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[#E7FBFF] text-center lg:text-start lg:w-1/2 mt-[150px] p-[50px] rounded-[20px] flex flex-col justify-start">
            <h1 className="text-[48px] lg:text-[65px] text-black mb-8">Contact Us</h1>
            <div className="pb-[20px]">
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <FaMapMarkerAlt className="text-[25px] text-[#6a6a8e] mt-[5px] lg:mr-2" />
                <h3 className="text-[25px] text-[#6a6a8e] lg:mt-0">Address:</h3>
              </div>
              <p className="text-[#6a6a8e] text-[18px] pl-0 lg:pl-[30px]">Benin City, Nigeria.</p>
            </div>
            <div className="pb-[20px]">
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <IoMdMail className="text-[25px] text-[#6a6a8e] mt-[5px] lg:mr-2" />
                <h3 className="text-[25px] text-[#6a6a8e] lg:mt-0">Email:</h3>
              </div>
              <p className="text-[#6a6a8e] text-[18px] pl-0 lg:pl-[30px]">
                <a
                  href="mailto:patners@creatorsideology.com"
                  className="transition-all duration-500 hover:text-gray-400"
                >
                  Patners@creatorsideology.com
                </a>
              </p>
            </div>
            <div>
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <FaGlobeAfrica className="text-[25px] text-[#6a6a8e] mt-[5px] lg:mr-2" />
                <h3 className="text-[25px] text-[#6a6a8e] lg:mt-0">Creators Ideology</h3>
              </div>
              <p className="text-[#6a6a8e] text-[18px] pl-0 lg:pl-[30px]">
                <a href="#" className="transition-all duration-500 hover:text-gray-400">
                  www.creatorsideology.com
                </a>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 md:pt-[150px] pb-[50px] px-4">
            <p className="text-white inline-block rounded py-[5px] px-[10px] border border-gray-500">
              Ready to work with us
            </p>
            <h1 className="text-[48px] lg:text-[65px] text-white mb-8">
              Get in touch
            </h1>
            <form className="w-full space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label
                    htmlFor="firstName"
                    className="block font-semibold text-white mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block font-semibold text-white mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="number"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-white mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="file"
                    className="block text-white font-semibold mb-2"
                  >
                    Type
                  </label>
                  <select
                    id="file"
                    name="subject"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[8px] px-[20px]"
                  >
                    <option value="" disabled selected>
                      Select Requirement
                    </option>
                    <option value="Creators">Creators</option>
                    <option value="Case Study">Case Study</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  rows="4"
                ></textarea>
              </div>

              <div
               
                className="relative flex justify-center items-center w-full gap-3 button group mt-4 px-4 py-2 border border-white text-white rounded-[6px] overflow-hidden"
              >
                <input type="submit" value="Send a Message" className="cursor-pointer"/>
                <span className="button-hover absolute group-hover:w-[1400px] group-hover:h-[1200px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-[15px] pb-[60px]">
        <h1 className="md:text-[36px] text-[22px] pb-[50px] font-bold text-center text-white">
          Explore Our Work
        </h1>
        <div className="flex flex-col gap-[30px]">
        <div className="w-full mx-auto px-[20px] h-auto md:h-[18vh] flex flex-col md:flex-row items-center justify-between rounded bg-[#441DBC] py-[20px] md:py-[0] ">
          <div className="mb-4 md:mb-0">
            <h1 className="text-lg md:text-[32px] text-center md:text-start font-semibold text-white">
              R'S koso
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              20%
            </h1>
            <p className="text-white">Increase in Brand Awareness</p>
          </div>
        </div>
        <div className="w-full mx-auto px-[20px] h-auto md:h-[18vh] flex flex-col md:flex-row items-center justify-between rounded bg-[#441DBC] py-[20px] md:py-[0]">
          <div className="mb-4 md:mb-0">
            <h1 className="text-lg md:text-[32px] text-center md:text-start font-semibold text-white">
              Fum
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              30%
            </h1>
            <p className="text-white">Increase in Product Desirability</p>
          </div>
        </div>

        <div className="w-full mx-auto px-[20px] h-auto md:h-[18vh] flex flex-col md:flex-row items-center justify-between rounded bg-[#441DBC] py-[20px] md:py-[0]">
          <div className="mb-4 md:mb-0">
            <h1 className="text-lg md:text-[32px] text-center md:text-start font-semibold text-white">
              Ekster
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              40%
            </h1>
            <p className="text-white">Increase in Brand Reputation</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
