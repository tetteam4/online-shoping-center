// Backdrop.js
import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-40"
      onClick={onClick} // Calls the onClick handler passed from the parent to close the backdrop
    ></div>
  );
};

export default Backdrop;
