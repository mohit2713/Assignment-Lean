import React, { useState } from "react";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    coupleName: "",
    yourImage: null,
    partnerImage: null,
    coupleImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Form Section */}
      <h2 className="text-center text-[25px] font-bold mt-6">
        Create your Love Timeline
      </h2>

      <div className="border-2 border-dotted border-[#917fb3] rounded-lg m-2 max-w-screen-md md:w-[70%] lg:w-[38%]">
        <div className="py-2 px-6 rounded-lg">
          <p className="text-center text-xl">Add your details</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Your Name */}
            <div>
              <label className="block text-md mb-2">Your Name</label>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-3 text-sm border-black rounded-md bg-[#e5beec] h-[55px]"
                required
              />
            </div>

            {/* Partner Name */}
            <div>
              <label className="block text-md mb-2">Partner Name</label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleInputChange}
                placeholder="Enter your partner name"
                className="w-full p-3 text-sm border-black rounded-md bg-[#e5beec] h-[55px]"
                required
              />
            </div>

            {/* Couple Name */}
            <div>
              <label className="block text-md mb-2">Couple Name</label>
              <input
                type="text"
                name="coupleName"
                value={formData.coupleName}
                onChange={handleInputChange}
                placeholder="Eg.. Virat & Anushka → Virushka"
                className="w-full p-3 text-sm border-black rounded-md bg-[#e5beec] h-[55px]"
              />
            </div>

            {/* Your Image */}
            <div>
              <label className="block text-md mb-2">
                Your Image{" "}
                <span className="text-sm">
                  (recommended aspect ratio of image 1:1)
                </span>
              </label>
              <div
                className={`relative w-full p-3 border-2 border-dotted border-[#917fb3] text-sm rounded-md bg-[#e5beec] flex ${
                  formData.yourImage ? "justify-evenly" : "justify-center"
                } items-center h-[55px]`}
              >
                <span className="truncate">
                  {formData.yourImage ? formData.yourImage.name : ""}
                </span>
                <label className="px-4 py-2 rounded-md cursor-pointer">
                  {formData.yourImage ? "Change file" : "Choose file"}
                  <input
                    type="file"
                    name="yourImage"
                    onChange={handleInputChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            {/* Partner Image */}
            <div>
              <label className="block text-md mb-2">
                Partner Image{" "}
                <span className="text-sm">
                  (recommended aspect ratio of image 1:1)
                </span>
              </label>
              <div
                className={`relative w-full p-3 border-2 border-dotted border-[#917fb3] text-sm rounded-md bg-[#e5beec] flex ${
                  formData.partnerImage ? "justify-evenly" : "justify-center"
                } items-center h-[55px]`}
              >
                <span className="truncate">
                  {formData.partnerImage ? formData.partnerImage.name : ""}
                </span>
                <label className="px-4 py-2 rounded-md cursor-pointer">
                  {formData.partnerImage ? "Change file" : "Choose file"}
                  <input
                    type="file"
                    name="partnerImage"
                    onChange={handleInputChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            {/* Couple Image */}
            <div>
              <label className="block text-md mb-2">
                Couple Image <span className="text-sm">(Optional)</span>
              </label>
              <div
                className={`relative w-full p-3 border-2 border-dotted border-[#917fb3] text-sm rounded-md bg-[#e5beec] flex ${
                  formData.coupleImage ? "justify-evenly" : "justify-center"
                } items-center h-[55px]`}
              >
                <span className="truncate">
                  {formData.coupleImage ? formData.coupleImage.name : ""}
                </span>
                <label className="px-4 py-2 rounded-md cursor-pointer">
                  {formData.coupleImage ? "Change file" : "Choose file"}
                  <input
                    type="file"
                    name="coupleImage"
                    onChange={handleInputChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
