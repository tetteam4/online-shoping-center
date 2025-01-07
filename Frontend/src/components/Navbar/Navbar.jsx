import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaMale, FaFemale, FaChild } from "react-icons/fa"; // Example icons for each item
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // List of navbar items with icons
  const navItems = [
    { to: "/men", label: "مد فشن مردانه", icon: <FaMale /> },
    { to: "/women", label: "مد فشن زنانه", icon: <FaFemale /> },
    { to: "/kids", label: "مد فشن کودکانه", icon: <FaChild /> },
    { to: "/accessories", label: "لوازم جانبی", icon: <FaChild /> },
    { to: "/footwear", label: "کفش", icon: <FaChild /> },
    { to: "/new-arrivals", label: "جدیدترین‌ها", icon: <FaChild /> },
    { to: "/sale", label: "حراج", icon: <FaChild /> },
  ];

  return (
    <nav className="mt-5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-3xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`absolute lg:static top-0 left-0 w-full lg:w-auto lg:flex  lg:bg-transparent lg:translate-x-0 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:items-center`}
        >
           <div className="flex items-center border-l-2 border-gray-400 ml-5 pl-5 font-semibold gap-x-2 cursor-pointer text-gray-780">
              <span>
                <TfiMenuAlt size={18} />
              </span>
              <p>دسته‌بندی کالاها</p>
            </div>
          <ul className="lg:flex lg:gap-8 lg:p-0 space-y-4 lg:space-y-0">
           
            {navItems.map((item) => (
              <li key={item.to} className="flex  items-center gap-2">
                <Link
                  to={item.to}
                  className="text-gray-600 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
