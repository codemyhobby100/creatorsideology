import React, { useRef, useState } from "react";
import { FaGlobeAfrica, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaInstagram , FaPhone } from "react-icons/fa6";
// import emailjs from '@emailjs/browser';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import './contact.css'
function Contact() {
  const [selectedOption, setSelectedOption] = useState('');
  const form = useRef(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_fr7mzyk', 'template_4rbbqu6', form.current, 'GOOS12UayBRp6Ye2U')
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
      <div className=" mx-auto py-10 px-4 ">
        <div className="flex flex-col lg:flex-row gap-6 contact">
          <div className="contact-left bg-[#000000] text-center lg:text-start lg:w-1/2 mt-[150px] p-[50px] rounded-[20px] flex flex-col justify-start">
            <h1 className="text-[48px] lg:text-[50px] pb-2 text-white">Stop struggling, start growing!</h1>
            <p className="text-white pb-2">Submit the form below and a member of our team would reach out to you within 24 hours! </p>
            <div className="pb-[20px] pt-5">
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <IoMdMail className="text-[20px] text-primary mt-[5px] lg:mr-2" />
                <h3 className="text-[20px] text-[#ffffff] lg:mt-0">Email:</h3>
              </div>
              <p className="text-[#ffffff] text-[18px] pl-0 lg:pl-[30px]">partners@creatorsideology.com</p>
            </div>
            <div className="pb-[20px]">
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <FaPhone className="text-[20px] text-primary mt-[5px] lg:mr-2" />
                <h3 className="text-[20px] text-[#ffffff] lg:mt-0">Phone Number:</h3>
              </div>
              <p className="text-whitw text-[18px] pl-0 lg:pl-[30px]">
                <a
                  href="tel:+13236471288                  "
                  className="transition-all duration-500 text-white"
                >
                  +13236471288
                </a>
              </p>
            </div>
            <div>
              <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-start">
                <FaInstagram className="text-[20px] text-primary mt-[5px] lg:mr-2" />
                <h3 className="text-[20px] text-[#ffffff] lg:mt-0">Instagram</h3>
              </div>
              <p className="text-[#ffffff] text-[18px] pl-0 lg:pl-[30px]">
                <a href="#" className="transition-all duration-500 hover:text-gray-400">
                  @creatorsideology
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
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-full">
                  <label htmlFor="file" className="block text-white font-semibold mb-2">
                    Type
                  </label>
                  <select
                    id="file"
                    name="subject"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[8px] px-[20px]"
                    onChange={handleOptionChange}
                    value={selectedOption}
                  >
                    <option value="" disabled>
                      Select Requirement
                    </option>
                    <option value="Creators">I am a creator looking for brand deals </option>
                    <option value="brand">I am a brand looking for the perfect influencers</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label htmlFor="firstName" className="block font-semibold text-white mb-2">
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
                  <label htmlFor="phone" className="block font-semibold text-white mb-2">
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
                  <label htmlFor="email" className="block font-semibold text-white mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  />
                </div>

                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label htmlFor="email" className="block font-semibold text-white mb-2">
                    Content Niche
                  </label>
                  <input
                    type="text"
                    id="niche"
                    name="niche"
                    className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  />
                </div>
              </div>

              {selectedOption === 'Creators' && (
                <div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:full mb-4 md:mb-0">
                      <label htmlFor="social" className="block font-semibold text-white mb-2">
                        Social Link
                      </label>
                      <input
                        type="text"
                        id="social"
                        name="social"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:full mb-4 md:mb-0">
                      <label htmlFor="content" className="block font-semibold text-white mb-2">
                        Content Link
                      </label>
                      <input
                        type="text"
                        id="content"
                        name="content"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedOption === 'brand' && (
                <div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                      <label htmlFor="brandName" className="block font-semibold text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="brandName"
                        name="brandName"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                      <label htmlFor="website" className="block font-semibold text-white mb-2">
                        Company Website
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                      <label htmlFor="brandEmail" className="block font-semibold text-white mb-2">
                        Brand Vertical
                      </label>
                      <input
                        type="email"
                        id="brandEmail"
                        name="brandEmail"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                      <label htmlFor="description" className="block font-semibold text-white mb-2">
                        Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer relative flex justify-center items-center w-full gap-3 button group mt-4 px-4 py-2 border border-white text-primary rounded-[6px] overflow-hidden"
              >
                Submit Message
                <span className="button-hover absolute group-hover:w-[1400px] group-hover:h-[1200px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
              </button>
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
            <Link to="/koso" className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </Link>
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
            <Link to="/fum" className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </Link>
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
            <Link to="/ekster" className="self-start w-auto flex items-center gap-3 button group mt-4 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </Link>
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
