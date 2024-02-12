import React from "react";
import { useState } from "react";

const RatingFilter = () => {
  const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState(false);
  return (
    <div>
      <div className="bg-slate-100 p-1">
        <div
          className="w-full text-start"
          onClick={() => setIsRatingDropdownOpen(!isRatingDropdownOpen)}
        >
          <p>Rating</p>
        </div>

        {isRatingDropdownOpen && (
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
        )}
      </div>
    </div>
  );
};

export default RatingFilter;
