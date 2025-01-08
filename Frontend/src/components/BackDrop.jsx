import React from "react";

const Backdrop = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed  left-0 right-0 bottom-0  bg-black bg-opacity-50 z-20"
      onMouseLeave={onClose}
    />
  );
};

export default Backdrop;
