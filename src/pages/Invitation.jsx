import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DownloadOutlined } from "@ant-design/icons";
import invitationBg from "../images/couple.jpg";

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
        <h1 className="text-3xl md:text-5xl text-[#C38416] mb-4 font-wedding rounded-lg p-2">
          Dear <span className="font-bold">{inviteeName}</span>, You're
          Cordially Invited to Celebrate Love
        </h1>

        <p className="text-xl md:text-3xl font-light text-[#C38416] mb-4 font-wedding rounded-lg p-2">
          at the wedding of
        </p>

        <h2 className="text-3xl md:text-6xl font-bold text-[#C38416] font-wedding rounded-lg p-2">
          Sasindu & Sanduni
        </h2>

        <div className="my-1 rounded-lg p-2">
          <p className="text-[#6b4c3b] font-wedding text-xl font-bold">On</p>
          <p className="text-4xl font-wedding font-bold text-[#C38416]">
            Wednesday, 29th October 2025
          </p>
        </div>

        <div className="my-1  rounded-lg p-2">
          <p className="font-wedding  text-xl text-[#976000]">At</p>
          <p className="text-4xl font-wedding text-[#C38416] font-bold">
            Golden Rose Hotel, Boralesgamuwa
          </p>
        </div>

        <div className="mt-3  rounded-lg p-2">
          <p className="font-wedding text-[#C38416] text-2xl">
            We appreciate your presence by 9.00 am
          </p>
        </div>

        <div className="my-1  rounded-lg p-2">
          <p className="font-wedding text-[#C38416] text-2xl">
            (Poruwa Ceremony at 09.17 am)
          </p>
        </div>

        <div className="border-t border-[#f3e7d9] pt-3 text-xl text-[#976000] font-bold font-wedding rounded-lg p-2">
          <p>RSVP</p>
        </div>
        <div className="border-t border-[#f3e7d9] pt-3 text-2xl text-[#C38416] font-bold font-wedding rounded-lg p-2">
          <p>Sasindu - 0784392088   | Sanduni - 0704858363</p>
        </div>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="fixed bottom-5 left-[750px] px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-lg hover:scale-105 transition z-50"
      >
        <DownloadOutlined className="text-xl" />
        <span className="font-date"> Download Invitation</span>
      </button>
    </div>
  );
}

export default Invitation;
