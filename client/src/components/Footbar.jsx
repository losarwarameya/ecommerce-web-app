import React from "react";

const Footbar = () => {
  return (
    <div className="bg-slate-800 text-white text-xl">
      {/* <div className="flex justify-center items-center gap-5 py-5">
      <a href="/">Home</a>
      <a href="/">Products</a>
      <a href="/">Orders</a>
      <a href="/">Cart</a>
      <a href="/">Profile</a>
    </div> */}
      <div className="flex justify-center items-center gap-5 py-5">
        <a href="/">Logo</a>
      </div>
      <div>
        <div className="flex justify-center items-center gap-5 py-5">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="flex justify-center items-center gap-5 py-5">
          <p>&copy; 2024 Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
