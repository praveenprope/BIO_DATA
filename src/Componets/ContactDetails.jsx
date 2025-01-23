import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = ({ contact, onChange }) => {
  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Contact Details
      </h2>

      {/* Contact Inputs */}
      <div className="grid grid-cols-1 gap-6">
        {/* Phone Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-500" /> Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={(e) => onChange("contact", "phone", e.target.value)}
            placeholder="Enter your phone number"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Address Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-blue-500" /> Address
          </label>
          <textarea
            name="address"
            value={contact.address}
            onChange={(e) => onChange("contact", "address", e.target.value)}
            placeholder="Enter your full address"
            rows="3"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
