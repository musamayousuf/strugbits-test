import React from "react";
import bg from "../assets/bg.jpg";

function Header() {
  return (
    <div>
      <div className="relative">
        <img
          src={bg}
          className="object-cover h-64 w-full opacity-40"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center text-black text-center p-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Optimized Your Meal
            </h1>
            <h1 className="text-xs mt-4 ">
              Select Meal to Add in Week. You will be able to edit, modify, and
              change the Meal Weeks.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
