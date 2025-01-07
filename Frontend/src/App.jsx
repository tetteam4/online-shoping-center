import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar/Header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
    // <Router>
    //   <div className="font-poppins">
    //     <Header
    //     <Navbar />
    //     {/* <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/shop" element={<Shop />} />
    //       <Route path="/cart" element={<CartPage />} />
    //     </Routes> */}
    //   </div>
    // </Router>
  );
};

export default App;
