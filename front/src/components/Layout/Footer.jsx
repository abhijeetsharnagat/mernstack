import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { footercompanyLinks } from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      {/* Subscribe Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-6 py-3 rounded-md text-whie md:w-auto w-full font-semibold text-lg">
            Submit
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* About Us */}
        <div className="text-center sm:text-start col-span-3">
          <h1 className="mb-4 font-semibold text-[#56d879]">About Us</h1>
          <p className="text-gray-400 leading-6">
            Welcome to our service-based website designed exclusively for students of MIT Academy of Engineering. Here, we provide a range of tailored services to support and enhance your academic journey. From resources to guidance, we're dedicated to helping you succeed.
          </p>
          <div className="mt-8">
            <a
              className="text-gray-400 hover:text-teal-400 duration-300
                 text-lg cursor-pointer leading-6 font-semibold"
              href="https://essentialsalandi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our About us section
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 MITEase. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
