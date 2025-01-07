import React from "react";

const Header = () => {
  return (
    <header className="bg-white  p-6">
      <div className="container mx-auto grid grid-cols-2">
        {/* Logo */}
        <div className="flex items-center  justify-between">
          <div className="text-3xl  font-bold text-blue-500">
            <a href="/">فروشگاه آنلاین</a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-5">
          {/* Sign In / Sign Up Buttons */}
          <div className="grid grid-cols-2 space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign Up
            </button>
          </div>

          {/* Cart Icon */}
          <div className="relative ml-4">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1 5m1-5h10m0 0l1 5M10 21a1 1 0 102 0m4-16V3m-8 2V3"
                />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
