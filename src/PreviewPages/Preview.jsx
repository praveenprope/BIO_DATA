import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const Preview2 = ({ fields }) => {
  const previewRef = useRef();

  const downloadAsPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 2 }); // increase scale for better image quality
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Set the image size to fill the page (A4 size)
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("biodata.pdf");
  };

  return (
    <>
      <div ref={previewRef} className="border-8  w-full rounded-lg">
        <div className="p-4 bg-orange-50 border-4 border-orange-300 shadow">
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">BIO DATA</h2>

          <div className="mb-4">
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-300">Personal Details</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(fields.personal).map(([key, value]) => (
                <p key={key} className="text-sm text-gray-700">
                  <strong>{key}:</strong> {value || "________"}
                </p>
              ))}
              <p className="text-sm text-gray-700">
                <strong>Gender:</strong> {fields.gender || "________"}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-300">Family Details</h3>
            {fields.family.map((member, index) => (
              <div key={index} className="p-2 bg-white border-l-4 border-orange-400 rounded-md mb-2">
                <p className="text-sm"><strong>Relation:</strong> {member.relation || "________"}</p>
                <p className="text-sm"><strong>Name:</strong> {member.name || "________"}</p>
                <p className="text-sm"><strong>Occupation:</strong> {member.occupation || "________"}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-orange-300">Contact Details</h3>
            <p className="text-sm"><strong>Phone:</strong> {fields.contact.phone || "________"}</p>
            <p className="text-sm"><strong>Address:</strong> {fields.contact.address || "________"}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={downloadAsPDF}
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Download as PDF
        </button>
      </div>
    </>
  );
};

export default Preview2;
