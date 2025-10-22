import React from "react";
import myPhoto from "../assets/Coming-Soon/coming soon-01.jpg";

function Photography() {
  return (
    <div className="pt-[var(--nav-h)] flex flex-col justify-start items-center min-h-screen bg-gray-100 text-center px-4">
      <img
        src={myPhoto}
        alt="Photography coming soon"
        className="max-w-full h-auto rounded-2xl shadow-lg"
      />
    </div>
  );
}

export default Photography;