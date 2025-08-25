// src/components/Stats.jsx
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/Home/main-page-01.jpg";

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
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="text-left">
              <div className="flex items-baseline gap-3 sm:gap-4">
                <span className="text-pink-600 font-extrabold leading-none text-5xl sm:text-6xl lg:text-7xl">+</span>
                <span className="text-black font-extrabold leading-none text-5xl sm:text-6xl lg:text-7xl">
                  <CountUp end={s.number} duration={2} shouldStart={startCount} formatter={formatNumber} />
                </span>
              </div>
              <p className="mt-3 pl-20 text-black text-sm sm:text-base max-w-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}