import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({ fields }) => {
  const previewRef = useRef();

  const downloadAsPDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("biodata.pdf");
  };

  return (
    <>
    <div ref={previewRef} className="border-8 border-blue-600  rounded-lg">
      <div  className="p-6 bg-orange-50 border-4 border-orange-300 shadow 7">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">BIO DATA</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-orange-300">Personal Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(fields.personal).map(([key, value]) => (
              <p key={key} className="text-gray-700">
                <strong>{key}:</strong> {value || "________"}
              </p>
            ))}
            <p className="text-gray-700">
              <strong>Gender:</strong> {fields.gender || "________"}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-orange-300">Family Details</h3>
          {fields.family.map((member, index) => (
            <div key={index} className="p-3 bg-white border-l-4 border-orange-400 rounded-md mb-2">
              <p><strong>Relation:</strong> {member.relation || "________"}</p>
              <p><strong>Name:</strong> {member.name || "________"}</p>
              <p><strong>Occupation:</strong> {member.occupation || "________"}</p>
            </div>
          ))}
        </div>
          
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-orange-300">Contact Details</h3>
          <p><strong>Phone:</strong> {fields.contact.phone || "________"}</p>
          <p><strong>Address:</strong> {fields.contact.address || "________"}</p>
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

export default Preview;
