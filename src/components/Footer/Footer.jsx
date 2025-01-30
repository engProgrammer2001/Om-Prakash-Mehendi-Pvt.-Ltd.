import React from "react";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#27214e] border-b border-[#ff6b3e] text-white relative"
      style={{
        backgroundImage: "url(/assets/png/footer-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >
      <div className="bg-[#27214e]/95 w-full h-full py-8">
        {/* First Row */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">About</h3>
            <img
              src="/assets/Logo/logo.png"
              className="w-40 h-48 py-4 rounded-full"
              alt="footer_logo"
            />
            <p className="text-lg space-y-3">
              Om Prakash Mehendi Artist is dedicated to providing exceptional
              Mehendi artistry and services. Our skilled artists aim to deliver
              the best designs and experiences for your special occasions.
            </p>
          </div>
          {/* Services Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Services</h3>
            <ul className="text-lg space-y-3">
              <li className="hover:text-orange-500 cursor-pointer">
                Bridal Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Party Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Dulha Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Guest Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Engagement Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Luxury Heavy Bridal Design
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Baby Shower Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Normal Hand Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Feet Design Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Dulha Dulhan Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Festival Mehandi
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Arabic Mehandi
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="text-lg space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/refer"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Refer & Earn
                </Link>
              </li>
              <li>
                <Link
                  to="/pay-now"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Pay Now
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Details Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">
              Contact Details
            </h3>
            <ul className="text-lg space-y-3">
              <li className="hover:text-orange-500 cursor-pointer">
                Phone: +91 8918234042
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Whatsapp: +91 9718651235
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Email: info@omprakashbridalmehandi.com
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Address: Near Prem Chineej fast Food, C-4 E, Market, Janakpuri
                Pincode 110058
              </li>
            </ul>
            <div className="flex space-x-4 items-start mt-2">
              <a
                href="https://www.facebook.com/omprakashmehandiart.omprakash.7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
              >
                <FaFacebook className="text-3xl text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/omprakashmehandiart9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
              >
                <FaInstagram className="text-3xl text-red-400 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/omprakashbridalmehandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
              >
                <FaInstagram className="text-3xl text-red-400 cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@omprakashbridalmehandi5927"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
              >
                <FaYoutube className="text-3xl text-red-600 cursor-pointer" />
              </a>
            </div>
            <div className="flex items-center space-x-2 border mt-11 border-gray-500 rounded p-2">
              <FaLock className="text-orange-500 text-4xl" />
              <span className="font-bold">
                SSL Encryption <br /> secure connection
              </span>
            </div>
            <div className="mt-11 rounded-lg p-2">
              <h3 className="font-bold text-lg mb-4">Refer to Friends</h3>
              <img src="/assets/refer/OmPrakash copy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-center p-4 py-4 lg:px-20">
          <p className="text-xl text-[#ff5411]">
            Ashok Vihar | Badarpur | Bhajanpura | Bhikaji Cama Place | Bhogal |
            Cannought Place | Central Delhi | Chandni Chowk | Chirag Delhi | CP
            | Daryaganj | Defence Colony | Delhi NCR | Dev Nagar | Dilshad
            Garden | Dwarka | East Delhi | East of Kailash | East Patel Nagar |
            Greater Kailash | GK-1 | GK-2 | Green Park | Gujranwala Town |
            Hamdard Nagar | Hari Nagar | Hauz Khas | Inderlok | Inderpuri |
            Janakpuri | Jangpura | Jhandevalan | Kalkaji | Kamla Nagar |
            Kanhaiya Nagar | Karampura | Karol Bagh | Keshavpuram | Khan Market
            | Kingsway Camp | Kirti Nagar | Lajpat Nagar | Lawrence Road | Laxmi
            Nagar | Lodhi Road | Mansarovar Garden | Mayapuri | Mayur Vihar
            Phase 1 | Mayur Vihar Phase 2 | Mayur Vihar Phase 3 | Mayur Vihar |
            Model Town | Moti Bagh | Moti Nagar | Najafgarh | Naraina Vihar |
            Naraina | Netaji Subhash Place | New Delhi | New Friends Colony |
            North Delhi | Paharganj | Palam | Paschim Vihar | Patel Nagar |
            Patparganj | Pitampura | Punjabi Bagh | Purani Delhi | Raja Garden |
            Rajendra Place | Rajinder Nagar | Rajouri Garden | Rani Bagh | RK
            Puram | Rohini | Safdarjung | Saket | Sarojini Nagar | Shahdara |
            Shalimar Bagh | Shalimar Garden | Shastri Nagar | South Delhi |
            South Ex | Subhash Nagar | Tagore Garden | Tilak Nagar | Timarpur |
            Tri Nagar | Uday Park | Uttam Nagar | Vasant Kunj | Vikaspuri |
            Vivek Vihar | West Delhi | West Patel Nagar | Agra | Amritsar |
            Faridabad | Ghaziabad | Greater Noida | Kanpur | Lucknow | Mathura |
            Meerut | Noida | Panipat | Rajasthan | Sonipat | Udaipur | Uttar
            Pradesh
          </p>
        </div>
        {/* Second Row */}
        <div className="text-center py-4 mt-8">
          <p className="text-lg cursor-pointer">
            &copy; 2025 Om Prakash Mehandi. All rights reserved & Developed By
            <Link
              className="text-orange-500"
              to="https://divywebb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Divy Webb Creation
            </Link>
          </p>
        </div>
        {/* Bottom Right Icons */}
        <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.link/h95s4f"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-300 animate-bounce"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
          {/* Call Icon */}
          <a
            href="tel:+918918234042"
            className="bg-blue-500 p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-300 animate-bounce"
          >
            <FaPhoneAlt className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
