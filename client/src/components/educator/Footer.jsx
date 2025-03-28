import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#004e92] to-[#000428] text-white py-8 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Educator Dashboard</h2>
          <p className="text-sm text-gray-300 mt-2">
            Empowering educators with the tools they need to create, manage, and
            enhance online learning experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <a href="/dashboard" className="hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white">My Courses</a>
            </li>
            <li>
              <a href="/settings" className="hover:text-white">Settings</a>
            </li>
            <li>
              <a href="/support" className="hover:text-white">Support</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Connect with Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Educator Dashboard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
