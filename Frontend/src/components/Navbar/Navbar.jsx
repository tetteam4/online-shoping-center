import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import Category from "../Category/Categoty";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Detect scroll to toggle navbar position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle delayed hover effect
  useEffect(() => {
    let timeout;
    if (isHovered) {
      timeout = setTimeout(() => setShowCategory(true), 300); // 300ms delay
    } else {
      timeout = setTimeout(() => setShowCategory(false), 300); // 300ms delay
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [isHovered]);

  // List of navbar items
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
    <nav
      className={`w-full z-30 transition-all border-t duration-500 ${
        isScrolled
          ? "sticky top-20 bg-white border-b-2 border-gray-800 shadow-md"
          : "fixed top-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-3xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`absolute lg:static -top-2 left-0 w lg:w-auto lg:flex lg:bg-transparent lg:translate-x-0 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:items-center`}
        >
          {/* دسته‌بندی کالاها Section */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center border-l-2 border-gray-400 ml-5 pl-5 font-semibold gap-x-2 cursor-pointer text-gray-780">
              <span>
                <TfiMenuAlt size={18} />
              </span>
              <p>دسته‌بندی کالاها</p>
            </div>

            {/* Categories Component */}
            {showCategory && (
              <div
                className="absolute top-full w-[1000px] bg-gray-100 overflow-y-scroll h-[550px] border z-50"
                style={{
                  direction: "ltr",
                }}
              >
                <div
                  style={{
                    direction: "rtl",
                  }}
                >
                  <Category />
                </div>
              </div>
            )}
          </div>

          {/* Navbar Items */}
          <ul className="lg:flex lg:gap-8 lg:p-0 space-y-4 lg:space-y-0">
            {navItems.map((item) => (
              <li key={item.to} className="flex items-center gap-2">
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
