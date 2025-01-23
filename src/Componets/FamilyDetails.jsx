import React from "react";
import { FaUser, FaTrashAlt, FaPlusCircle } from "react-icons/fa";

const FamilyDetails = ({ family, onAdd, onDelete, onChange }) => {
  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Family Details
      </h2>

      {/* Family Member List */}
      {family.map((member, index) => (
        <div
          key={index}
          className="relative bg-gray-50 border-l-4 border-blue-500 p-4 mb-4 rounded-md shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <FaUser className="text-blue-500" /> Family Member {index + 1}
            </h3>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 hover:text-red-700 transition-all duration-200"
            >
              <FaTrashAlt /> {/* Delete Icon */}
            </button>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Relation */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Relation</label>
              <input
                type="text"
                value={member.relation}
                onChange={(e) => onChange(index, "relation", e.target.value)}
                placeholder="Enter relation"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                value={member.name}
                onChange={(e) => onChange(index, "name", e.target.value)}
                placeholder="Enter name"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Occupation */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Occupation</label>
              <input
                type="text"
                value={member.occupation}
                onChange={(e) => onChange(index, "occupation", e.target.value)}
                placeholder="Enter occupation"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add Family Member Button */}
      <div className="flex justify-center">
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md"
        >
          <FaPlusCircle /> Add Family Member
        </button>
      </div>
    </div>
  );
};

export default FamilyDetails;
