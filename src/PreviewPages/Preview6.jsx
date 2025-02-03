import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview6 = ({ fields }) => {
  const previewRef = useRef();

  const downloadAsPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("biodata.pdf");
  };

  return (
    <>
      <div
        ref={previewRef}
        className="border-4 border-blue-700 w-full rounded-lg p-4 bg-blue-50 shadow-lg"
      >
        <div className="p-4 border-2 border-blue-300 bg-white shadow">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">BIO DATA</h2>

          {/* Personal Details */}
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-2 border-b-2 border-blue-300">Personal Details</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              {Object.entries(fields.personal).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <strong>{key}:</strong> {value || "________"}
                </p>
              ))}
              <p className="text-sm">
                <strong>Gender:</strong> {fields.gender || "________"}
              </p>
            </div>
          </div>

          {/* Family Details */}
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-2 border-b-2 border-blue-300">Family Details</h3>
            {fields.family.map((member, index) => (
              <div key={index} className="p-2 bg-blue-100 border-l-4 border-blue-500 rounded-md mb-2">
                <p className="text-sm"><strong>Relation:</strong> {member.relation || "________"}</p>
                <p className="text-sm"><strong>Name:</strong> {member.name || "________"}</p>
                <p className="text-sm"><strong>Occupation:</strong> {member.occupation || "________"}</p>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-blue-300">Contact Details</h3>
            <p className="text-sm"><strong>Phone:</strong> {fields.contact.phone || "________"}</p>
            <p className="text-sm"><strong>Address:</strong> {fields.contact.address || "________"}</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <button
          onClick={downloadAsPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Download as PDF
        </button>
      </div>
    </>
  );
};

export default Preview6;
