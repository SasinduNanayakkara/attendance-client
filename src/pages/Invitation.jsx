import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DownloadOutlined } from "@ant-design/icons";
import invitationBg from "../images/invitation.png";

function Invitation() {
  const location = useLocation();
  const { inviteeName } = location.state || {};

  const componentRef = useRef();

  const downloadPDF = async () => {
    const original = componentRef.current;

    const clone = original.cloneNode(true);
    clone.style.width = "800px"; // typical desktop width
    clone.style.padding = "40px";
    clone.style.backgroundColor = "white";
    clone.style.position = "absolute";
    clone.style.top = "-9999px"; // hide from screen
    clone.style.left = "-9999px";

    document.body.appendChild(clone);
    
    const canvas = await html2canvas(clone, { scale: 3, useCORS: true, });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Sasindu&Sanduni.pdf");

    document.body.removeChild(clone);
  };

  return (
    <div className="min-h-screen bg-[#fdf6ec] flex items-center justify-center px-4 py-12">
      <div
        ref={componentRef}
        className="max-w-2xl w-full shadow-xl rounded-2xl p-8 text-center border border-[#f3e7d9]"
        style={{
          backgroundImage: `url(${invitationBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white", // fallback color
        }}
      >
        <div className="bg-white/70 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-serif text-[#a1866f] mb-4  rounded-lg p-2">
          Dear <span className="font-bold">{inviteeName}</span>, You're
          Cordially Invited to Celebrate Love
        </h1>

        <p className="text-xl md:text-2xl font-light text-[#6b4c3b] mb-6  rounded-lg p-2">
          at the wedding of
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#a1866f] mb-2  rounded-lg p-2">
          Sasindu & Sanduni
        </h2>

        <div className="my-4  rounded-lg p-2">
          <p className="text-[#6b4c3b] text-lg">On</p>
          <p className="text-2xl font-semibold text-[#a1866f]">
            29th October 2025
          </p>
        </div>

        <div className="my-4  rounded-lg p-2">
          <p className="text-[#6b4c3b] text-lg">At</p>
          <p className="text-2xl text-[#a1866f] font-bold">
            Golden Rose Hotel, Boralesgamuwa
          </p>
        </div>

        <div className="mt-10  rounded-lg p-2">
          <p className="text-[#6b4c3b] text-md">
            We appreciate your presence by 9.00 AM
          </p>
        </div>

        <div className="my-2  rounded-lg p-2">
          <p className="text-[#6b4c3b] text-md">
            (Poruwa Ceremony at 09.17 AM)
          </p>
        </div>

        <div className="border-t border-[#f3e7d9] pt-3 text-md text-[#a1866f] font-bold rounded-lg p-2">
          <p>RSVP</p>
        </div>
        <div className="border-t border-[#f3e7d9] pt-3 text-md text-[#a1866f] font-bold rounded-lg p-2">
          <p>Sasindu - 0784392088   | Sanduni - 0704858363</p>
        </div>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-[#a1866f] hover:bg-[#8c705a] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 z-50"
      >
        <DownloadOutlined className="text-xl" />
        Download Invitation
      </button>
    </div>
  );
}

export default Invitation;
