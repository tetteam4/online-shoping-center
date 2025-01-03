import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const FashionNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          FashionHub
        </Link>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-3xl"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`absolute lg:static top-0 left-0 w-full lg:w-auto lg:flex bg-gray-800 lg:bg-transparent lg:translate-x-0 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:items-center`}
        >
          <ul className="lg:flex lg:gap-8 p-4 lg:p-0 space-y-4 lg:space-y-0">
            <li>
              <Link
                to="/men"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Men's Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Women's Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Kids' Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/footwear"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Footwear
              </Link>
            </li>
            <li>
              <Link
                to="/new-arrivals"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/sale"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FashionNavbar;
