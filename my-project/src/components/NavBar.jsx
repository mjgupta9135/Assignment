import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-purple-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://img.icons8.com/?size=100&id=84005&format=png&color=FFFFFF"
              width="30px"
              height="30px"
              alt="logo"
            />
            <h2 className="text-2xl font-semibold text-white">Home</h2>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/" className="text-white hover:text-gray-200">
              Services
            </Link>
            <Link to="/" className="text-white hover:text-gray-200">
              Products
            </Link>
            <Link to="/" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
