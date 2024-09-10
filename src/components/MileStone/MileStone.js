import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the calendar
import { FiTrash } from "react-icons/fi";
import "./MileStone.css";

const MilestoneForm = () => {
  const [milestones, setMilestones] = useState([{ name: "", date: null }]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdowns, setShowDropdowns] = useState([false]); // Track dropdown state for each milestone
  const [showAlert, setShowAlert] = useState(false); // State to show alert pop-up
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false); // State for empty form field alert

  const handleMilestoneChange = (index, field, value) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index][field] = value;
    setMilestones(updatedMilestones);
  };

  const handleAddMilestone = () => {
    setMilestones([...milestones, { name: "", date: null }]);
    setShowDropdowns([...showDropdowns, false]); // Add new dropdown state for new milestone
  };

  const handleDeleteMilestone = (index) => {
    if (milestones.length <= 2) {
      // Show alert pop-up when less than 2 milestones are left
      setShowAlert(true);

      // Automatically hide alert after 2 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return;
    }

    const updatedMilestones = milestones.filter((_, i) => i !== index);
    setMilestones(updatedMilestones);

    const updatedDropdowns = showDropdowns.filter((_, i) => i !== index);
    setShowDropdowns(updatedDropdowns); // Remove the dropdown state for deleted milestone
  };

  const toggleDropdown = (index, value) => {
    const updatedDropdowns = [...showDropdowns];
    updatedDropdowns[index] = value;
    setShowDropdowns(updatedDropdowns);
  };

  const handleSearch = (index) => {
    // Mock search suggestions
    const suggestions = [""];
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="absolute bg-white border border-gray-300 rounded-md w-full z-10 shadow-lg p-2">
        <div className="flex items-center p-2 bg-purple-200 rounded-md mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 12.65z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-purple-200 p-2 rounded-md border-none outline-none"
            placeholder="Search milestones..."
          />
        </div>
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion, i) => (
            <div
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleMilestoneChange(index, "name", suggestion);
                toggleDropdown(index, false);
              }}
            >
              {suggestion}
            </div>
          ))
        ) : (
          <div className="p-2 text-gray-500">No results</div>
        )}

        {/* Add New Milestone Option */}
        <div
          className="p-2 mt-2 text-black cursor-pointer hover:bg-gray-100 rounded-md font-semibold"
          onClick={() => {
            handleMilestoneChange(index, "name", searchQuery);
            toggleDropdown(index, false);
          }}
        >
          Add new milestone
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    // Check if all milestones have name and date filled
    const isFormValid = milestones.every(
      (milestone) => milestone.name !== "" && milestone.date !== null
    );

    if (!isFormValid) {
      // Show pop-up alert if any field is empty
      setShowEmptyFieldsAlert(true);

      // Automatically hide alert after 2 seconds
      setTimeout(() => {
        setShowEmptyFieldsAlert(false);
      }, 1000);

      return;
    }

    // If form is valid, proceed with timeline creation so i just log it.
    console.log("Timeline created", milestones);
  };

  return (
    <>
      <div className="border-2 border-dotted border-[#917fb3] rounded-lg m-2 max-w-screen-md md:w-[70%] lg:w-[38%] p-6 relative">
        <h3 className="text-center text-[1.2rem] text-[#2a2f4f] font-bold mb-6">
          Add your journey milestones
        </h3>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 mb-4 items-center relative"
          >
            <div className="relative w-full">
              <label className="block text-md mb-2">
                Milestone {index + 1}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={milestone.name}
                  onClick={() => {
                    toggleDropdown(index, true);
                    setSearchQuery(""); // Reset searchQuery on click
                  }} // Show dropdown on click
                  onChange={(e) => {
                    handleMilestoneChange(index, "name", e.target.value);
                    setSearchQuery(e.target.value);

                    // Close dropdown when typing manually in the input
                    if (e.target.value.length > 0) {
                      toggleDropdown(index, false);
                    }
                  }}
                  placeholder={`Milestone ${index + 1}`}
                  className="w-full p-3 bg-[#e5beec] text-sm border-black rounded-md h-[55px]"
                />
              </div>
              {showDropdowns[index] && handleSearch(index)}
            </div>

            <div className="relative w-full">
              <label className="block text-md mb-2">
                Date of Milestone {index + 1}
              </label>
              <DatePicker
                selected={milestone.date}
                onChange={(date) => handleMilestoneChange(index, "date", date)}
                dateFormat="dd/MM/yyyy"
                className="w-full p-3 bg-[#e5beec] rounded-md h-[55px] border-black"
                placeholderText="dd/mm/yyyy"
              />
            </div>

            <div
              className="absolute right-1 top-1 cursor-pointer"
              onClick={() => handleDeleteMilestone(index)}
            >
              <FiTrash size={15} />
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            onClick={handleAddMilestone}
            className="bg-[#917fb3] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#1b1e30]"
          >
            Add Milestone
          </button>
        </div>

        {/* This is for Alert Pop-up for Deleting All Milestones */}
        {showAlert && (
          <div
            className="fixed top-4 right-4 bg-white border border-gray-300 p-4 rounded-md shadow-lg z-50 flex items-center justify-between"
            style={{ width: "280px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1 4v1m-1-1h-1v-1m3 3v-1a4 4 0 10-8 0v1h3m3-1v1h3m-3 1h1v-1"
              />
            </svg>
            <span>At least Two Milestones are Required</span>
            <button
              className="ml-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowAlert(false)}
            >
              ✖
            </button>
          </div>
        )}

        {/* This is for empty fields alerts */}
        {showEmptyFieldsAlert && (
          <div
            className="fixed top-4 right-4 bg-white border border-gray-300 p-4 rounded-md shadow-lg z-50 flex items-center justify-between"
            style={{ width: "280px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12l4.5-4.5m0 0l4.5 4.5m-4.5-4.5V21"
              />
            </svg>
            <span>Please fill out all fields</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-[#917fb3] text-white px-6 py-3 rounded-md mt-4 mb-6 hover:bg-[#1b1e30]"
        >
          Create Timeline
        </button>
      </div>
    </>
  );
};

export default MilestoneForm;
