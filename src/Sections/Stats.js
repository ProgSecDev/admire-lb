// src/components/Stats.jsx
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/Home/main-03.jpg";

// NOTE: numbers are the targets (e.g., 125000 -> 125,000)
const stats = [
  { number: 14, desc: "Years of experience" },
  { number: 125000, desc: "We gained dozen of clients from all over the world" },
  { number: 200000, desc: "We have successfully completed a total of 200,000 of projects" },
];

function CountUp({ end, start = 0, duration = 2, shouldStart, formatter }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;
    let rafId;
    const startTs = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTs) / (duration * 1000), 1);
      const value = Math.round(start + (end - start) * progress);
      setCount(value);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [shouldStart, end, start, duration]);

  return <>{formatter ? formatter(count) : count}</>;
}

export default function StatsHighlight() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Start when ~40% of the section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const formatNumber = (n) => n.toLocaleString();

  return (
    <section
  ref={sectionRef}
  className="relative bg-fixed bg-center bg-contain"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* overlay with side gaps */}
      <div
        className="
          pointer-events-none absolute inset-y-0
          left-2 right-2 sm:left-6 sm:right-6 lg:left-12 lg:right-12
          bg-white/60
        "
      />

  {/* 👇 Blur overlay at bottom to blend into footer */}
  {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-300 via-gray-300/50 to-transparent backdrop-blur-md pointer-events-none z-20" /> */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-16 lg:py-10">
    {/* Stats grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-2">
      {stats.map((s, i) => (
        <div key={i} className="text-left">
          <div className="flex items-baseline gap-3 sm:gap-4">
            <span className="text-pink-600 font-extrabold leading-none text-4xl sm:text-6xl lg:text-6xl">+</span>
            <span className="text-black font-extrabold leading-none text-4xl sm:text-6xl lg:text-6xl md:text-4xl text-left">
              <CountUp end={s.number} duration={2} shouldStart={startCount} formatter={formatNumber} />
            </span>
          </div>
          <p className="mt-3 pl-10 text-black text-sm sm:text-base max-w-xs text-left">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}