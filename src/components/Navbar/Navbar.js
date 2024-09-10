import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#e5beec] text-center py-2 flex flex-col">
      <div className="flex items-center ml-2">
        <img
          src="https://loveto.greetsu.com/rainbow.png"
          alt="Logo"
          className="h-14 mb-2 cursor-pointer"
        />
        <div className="ml-1">
          <i className="text-[20px] font-bold text-[#2a2f4f]">Loveto </i>
          <span className="text-[13px] text-black">
            Create your love timeline
          </span>
          <p className="text-[8px] text-left">
            Powered by{" "}
            <span className="text-pink-900 text-[11px]">GreetsU</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
