import React, { useEffect, useRef } from "react";
import one from "../assets/Banners/story1.jpeg";
import two from "../assets/Banners/story2.jpeg";
import three from "../assets/Banners/story3.jpeg";

function Story() {
  const leftColumnRef = useRef(null);
  const imageRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const images = imageRefs.map(ref => ref.current);
    if (!leftColumn || images.some(img => !img)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftColumn.style.transition = "transform 1s ease-out";
          leftColumn.style.transform = "translateX(0)";
          images.forEach(img => {
            img.style.transition = "transform 1s ease-out";
            img.style.transform = "translateX(0)";
          });
        }
      });
    }, { threshold: 0.1 });

    observer.observe(leftColumn);
    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#6F6D39] flex justify-center items-center py-20">
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div
            ref={leftColumnRef}
            className="transform -translate-x-full text-center md:text-left"
          >
            <h1
              className="text-white text-4xl md:text-6xl"
              style={{ fontFamily: "Aldhabi, cursive" }}
            >
              About Us
            </h1>
            <p
              className="text-white mt-6"
              style={{
                fontFamily: "Bookman Old Style, serif",
                fontWeight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 justify-items-center md:flex md:justify-start">
            {[two, one, three].map((img, idx) => (
              <div
                key={idx}
                ref={imageRefs[idx]}
                className="relative w-64 h-96 transform translate-x-full"
              >
                <img src={img} alt="Story" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;