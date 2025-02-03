import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview5 = ({ fields }) => {
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
        className="border-8 w-full rounded-lg p-4 bg-gray-100 border-black border-dashed shadow-lg"
      >
        <div className="p-4 bg-white border-4 border-black border-dashed shadow">
          <h2 className="text-2xl font-bold text-center text-black mb-4 underline decoration-wavy">
            BIO DATA (Rough Draft)
          </h2>

          <div className="mb-4">
            <h3 className="text-base font-semibold mb-2 border-b-2 border-black">Personal Details</h3>
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
            <h3 className="text-base font-semibold mb-2 border-b-2 border-black">Family Details</h3>
            {fields.family.map((member, index) => (
              <div key={index} className="p-2 bg-gray-50 border-l-8 border-black mb-2">
                <p className="text-sm"><strong>Relation:</strong> {member.relation || "________"}</p>
                <p className="text-sm"><strong>Name:</strong> {member.name || "________"}</p>
                <p className="text-sm"><strong>Occupation:</strong> {member.occupation || "________"}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 border-b-2 border-black">Contact Details</h3>
            <p className="text-sm"><strong>Phone:</strong> {fields.contact.phone || "________"}</p>
            <p className="text-sm"><strong>Address:</strong> {fields.contact.address || "________"}</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={downloadAsPDF}
          className="bg-black text-white px-6 py-3 rounded-md border-4 border-black border-dashed hover:bg-gray-800 transition-all"
        >
          Download as PDF (Still a Draft!)
        </button>
      </div>
    </>
  );
};

export default Preview5;
