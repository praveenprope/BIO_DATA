import React from "react";
import { FaMars, FaVenus } from "react-icons/fa";

const GenderSelection = ({ gender, onChange }) => {
  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Gender Selection
      </h2>

      {/* Gender Options */}
      <div className="flex justify-center gap-6">
        {/* Male Option */}
        <label
          className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
            gender === "Male"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={() => onChange("Male")}
            className="hidden"
          />
          <FaMars
            className={`text-4xl ${
              gender === "Male" ? "text-blue-500" : "text-gray-500"
            }`}
          />
          <span
            className={`mt-2 font-medium ${
              gender === "Male" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Male
          </span>
        </label>

        {/* Female Option */}
        <label
          className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
            gender === "Female"
              ? "border-pink-500 bg-pink-50"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={() => onChange("Female")}
            className="hidden"
          />
          <FaVenus
            className={`text-4xl ${
              gender === "Female" ? "text-pink-500" : "text-gray-500"
            }`}
          />
          <span
            className={`mt-2 font-medium ${
              gender === "Female" ? "text-pink-600" : "text-gray-600"
            }`}
          >
            Female
          </span>
        </label>
      </div>
    </div>
  );
};

export default GenderSelection;
