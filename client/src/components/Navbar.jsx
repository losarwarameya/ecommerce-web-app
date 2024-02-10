import React from "react";

const Navbar = () => {
  return (
    <div className="sticky bg-slate-600 w-full text-white py-3 px-5 flex justify-between items-center text-xl">
      <div>
        {/* TODO: insert logo or brand name */}

        <a href="/">Home</a>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a href="/">Products</a>
        <a href="/">Orders</a>
        <a href="/">Cart</a>
        <a href="/">Profile</a>
        <button className="bg-slate-500 hover:bg-slate-700 px-2 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
