import React, { useEffect, useRef } from "react";
import one from "../assets/Banners/story1.jpeg";
import two from "../assets/Banners/story2.jpeg";
import three from "../assets/Banners/About us - 3rd picture - Turmeric.jpg";

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
    <div className="bg-[#212121] flex justify-center items-center py-20">
      <div className="max-w-6xl w-full px-2">
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
              Founded in 2000 in the heart of Lebanon, our company has been dedicated to crafting 
              premium-quality spices that embody the rich flavors and culinary heritage of the region. 
              With a passion for excellence and a commitment to authenticity, 
              we have grown to become a trusted name in the world of spices, offering a diverse 
              range of products that elevate kitchens and dining experiences worldwide. 
              Our journey began with a simple mission: to bring the essence of nature's finest 
              ingredients to every table. Over the years, we have perfected the art of sourcing, 
              blending, and preserving the natural aromas and flavors of spices. <br></br><br></br>
              From vibrant herbs to exotic spice blends, each product reflects our unwavering dedication 
              to quality, freshness, and taste. With a focus on sustainability and responsible 
              sourcing, we partner with local farmers and global suppliers to ensure every spice 
              meets the highest industry standards. Our modern production facilities and 
              rigorous quality control processes guarantee that each product maintains its purity 
              and freshness from farm to table. Beyond our presence in Lebanon, we proudly 
              export our products to international markets, sharing the rich flavors of Lebanese 
              culinary tradition with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 justify-items-center md:flex md:justify-start mt-24">
            {[two, one, three].map((img, idx) => (
              <div
                key={idx}
                ref={imageRefs[idx]}
                className="relative w-64 h-96 transform translate-x-full"
              >
                <img src={img} alt="Story" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;