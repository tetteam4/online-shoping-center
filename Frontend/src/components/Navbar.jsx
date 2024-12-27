import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          ShopMate
        </Link>
        <div className="space-x-4">
          <Link to="/shop" className="hover:text-yellow-300">
            Shop
          </Link>
          <Link to="/cart" className="hover:text-yellow-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
