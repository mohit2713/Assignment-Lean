import React from "react";
import Navbar from "../Navbar/Navbar";
import DetailsForm from "../DetailsFrom/DetailsForm";
import MilestoneForm from "../MileStone/MileStone";
import SideLogo from "../SideLogo/SideLogo";

const LoveTimelineForm = () => {
  return (
    <div className="min-h-screen bg-[#fde2f3] flex flex-col items-center">
      <SideLogo />
      <Navbar />
      <DetailsForm />
      <MilestoneForm />
    </div>
  );
};

export default LoveTimelineForm;
