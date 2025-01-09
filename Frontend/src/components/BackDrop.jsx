import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-20"
      onClick={onClick}
    />,
    document.getElementById("backdrop-root") // Make sure to create this div in your HTML
  );
};

export default Backdrop;
