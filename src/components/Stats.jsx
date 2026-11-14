import { useEffect, useRef, useState } from "react";
import { stats } from "../data/content.js";

function CountUp({ value }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1500, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <b ref={ref} className="block text-3xl text-brand md:text-5xl">{n}{suffix}</b>;
}

export default function Stats() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-3 px-6">
        {stats.map(([value, label]) => (
          <div key={label} className="border-r border-line px-4 py-7 last:border-0 md:px-6">
            <CountUp value={value} />
            <span className="text-sm text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}