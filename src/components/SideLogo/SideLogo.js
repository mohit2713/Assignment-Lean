import React from "react";

const SideLogo = () => {
  return (
    <div className="fixed bottom-4 left-4 ml-2 hidden lg:flex">
      <img
        src="https://loveto.greetsu.com/static/media/greetsu-favicon.b43044faff18cc4fe7f572ee5fe84cef.svg"
        alt="GreetsU Logo"
        className="w-[50px] h-auto"
      />
      <div className="ml-2">
        {/* Reduced the gap by adjusting line-height and margin */}
        <p className="text-[15px] leading-tight">from team</p>
        <span>
          <h1 className="text-2xl text-[#2a2f4f] font-bold mt-[-4px]">
            GreetsU
          </h1>
        </span>
      </div>
    </div>
  );
};

export default SideLogo;
