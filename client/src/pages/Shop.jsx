import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footbar from "../components/Footbar";

const Shop = () => {
  const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState[false];
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between">
        <form
          className="flex flex-col bg-slate-400 w-1/4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex justify-between items-center m-2">
            <p>Filters</p>
            <button type="submit">Apply filters</button>
          </div>
          <div className="bg-slate-300 p-3">
            <div className="bg-slate-100 p-1">
              <div>
                <p>Rating</p>
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="radio" name="rating" value="4+" />
                  4+
                </label>
                <label>
                  <input type="radio" name="rating" value="3+" />
                  3+
                </label>
                <label>
                  <input type="radio" name="rating" value="2+" />
                  2+
                </label>
                <label>
                  <input type="radio" name="rating" value="1+" />
                  1+
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="bg-slate-200 w-3/4">Products</div>
      </div>
      <Footbar />
    </div>
  );
};

export default Shop;
