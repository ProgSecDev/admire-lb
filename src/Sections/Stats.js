import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/Home/home-background.jpg";

const stats = [
  { number: 14, label: "Years Experience" },
  { number: 125, label: "Clients" },
  { number: 200, label: "Projects" }
];

const StatsHighlight = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-5 px-4 bg-fixed bg-center bg-cover relative min-h-[200px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <CountUp
              end={stat.number}
              start={0}
              duration={2}
              shouldStart={startCount}
            />
            <p className="text-pink-600 text-sm md:text-base mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountUp = ({ end, start, duration, shouldStart }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(
        Math.floor(start + (progress / (duration * 1000)) * (end - start)),
        end
      );
      setCount(value);
      if (value < end) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [shouldStart, end, start, duration]);

  return <h2 className="text-4xl md:text-5xl font-bold text-pink-600">{count}{typeof end === 'number' ? '' : '+'}</h2>;
};

export default StatsHighlight;