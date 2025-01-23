import React from "react";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPaintBrush, FaBriefcase, FaBookOpen } from "react-icons/fa";

const PersonalDetails = ({ personal, onChange }) => {
  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Personal Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaUser /> Name
          </label>
          <input
            type="text"
            name="name"
            value={personal.name}
            onChange={(e) => onChange("personal", "Name", e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaCalendarAlt /> Date of Birth
          </label>
          <input
            type="date"
            name="BOB"
            value={personal.dob}
            onChange={(e) => onChange("personal", "BOB", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Place of Birth */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaMapMarkerAlt /> Place of Birth
          </label>
          <input
            type="text"
            name="Birthplace"
            value={personal.birthplace}
            onChange={(e) => onChange("personal", "Birthplace", e.target.value)}
            placeholder="Enter your place of birth"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Complexion */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Complexion</label>
          <select
            name="Complexion"
            value={personal.complexion}
            onChange={(e) => onChange("personal", "Complexion", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select your skin tone</option>
            <option value="fair">Fair</option>
            <option value="medium">Medium</option>
            <option value="olive">Olive</option>
            <option value="brown">Brown</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Height */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Height</label>
          <input
            type="text"
            name="Height"
            value={personal.height}
            onChange={(e) => onChange("personal", "Height", e.target.value)}
            placeholder="Enter your height (e.g., 5'6\)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaBookOpen /> Education
          </label>
          <input
            type="text"
            name="Education"
            value={personal.education}
            onChange={(e) => onChange("personal", "Education", e.target.value)}
            placeholder="Enter your highest qualification"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Religion/Caste */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Religion/Caste</label>
          <input
            type="text"
            name="Religion"
            value={personal.religion}
            onChange={(e) => onChange("personal", "Religion", e.target.value)}
            placeholder="Enter your religion and caste"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Hobbies */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaPaintBrush /> Hobbies
          </label>
          <input
            type="text"
            name="Hobbies"
            value={personal.hobbies}
            onChange={(e) => onChange("personal", "Hobbies", e.target.value)}
            placeholder="Enter your hobbies"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Work */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 flex items-center gap-2">
            <FaBriefcase /> Work
          </label>
          <input
            type="text"
            name="Work"
            value={personal.work}
            onChange={(e) => onChange("personal", "Work", e.target.value)}
            placeholder="Enter your work/profession"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
