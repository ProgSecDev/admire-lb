// src/pages/PhotographyComingSoon.js
import React from "react";
import myPhoto from "../assets/Coming-Soon/coming soon-01.jpg"; // adjust path to where your image is

function Photography() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center px-4">
      <img
        src={myPhoto}
        alt="Photography coming soon"
        className="max-w-full h-auto rounded-2xl shadow-lg"
      />
      {/* <p className="text-lg text-gray-600 mt-6">
        We're working hard on this page. Stay tuned — something awesome is in the works!
      </p> */}
    </div>
  );
}

export default Photography;
