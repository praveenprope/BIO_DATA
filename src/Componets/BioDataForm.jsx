import React, { useState, useEffect } from "react";
import PersonalDetails from "./PersonalDetails";
import FamilyDetails from "./FamilyDetails";
import ContactDetails from "./ContactDetails";
import GenderSelection from "./GenderSelection";
import Preview from "./Preview";

const BioDataForm = () => {
  const [fields, setFields] = useState({
    personal: {
      Name: "",
      BOB: "",
      Birthplace: "",
      Complexion: "",
      Height: "",
      Education: "",
      Religion: "",
      Hobbies: "",
      Work: "",
    },
    family: [
      { relation: "Father", name: "Mr.", occupation: "" },
      { relation: "Mother", name: "Mrs.", occupation: "" },
    ],
    contact: { phone: "", address: "" },
    gender: "",
    errors: {},
  });

  useEffect(() => {
    const savedFields = localStorage.getItem("bioData");
    if (savedFields) setFields(JSON.parse(savedFields));
  }, []);

  useEffect(() => {
    localStorage.setItem("bioData", JSON.stringify(fields));
  }, [fields]);

  const handleFieldChange = (section, key, value) => {
    setFields((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const addFamilyMember = () => {
    setFields((prev) => ({
      ...prev,
      family: [...prev.family, { relation: "", name: "", occupation: "" }],
    }));
  };

  const deleteFamilyMember = (index) => {
    setFields((prev) => ({
      ...prev,
      family: prev.family.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">BIO-DATA</h1>

      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <PersonalDetails personal={fields.personal} onChange={handleFieldChange} />
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <GenderSelection gender={fields.gender} onChange={(value) => setFields({ ...fields, gender: value })} />
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <FamilyDetails
          family={fields.family}
          onAdd={addFamilyMember}
          onDelete={deleteFamilyMember}
          onChange={(index, key, value) => {
            const updatedFamily = [...fields.family];
            updatedFamily[index][key] = value;
            setFields({ ...fields, family: updatedFamily });
          }}
        />
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <ContactDetails contact={fields.contact} onChange={handleFieldChange} />
      </div>

      <div className="flex gap-6 justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Submit
        </button>
      </div>

      {/* Include Preview */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-md">
        <Preview fields={fields} />
      </div>
    </div>
  );
};

export default BioDataForm;
