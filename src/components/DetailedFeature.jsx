import { useEffect, useRef, useState } from "react";

// Illustrated avatars via DiceBear (free, open-source)
const avatars = [
  { id: 1, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zara&backgroundColor=b6e3f4", bg: "#b6e3f4" },
  { id: 2, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=c0aede", bg: "#c0aede" },
  { id: 3, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Maya&backgroundColor=ffdfbf", bg: "#ffdfbf" },
  { id: 4, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=d1d4f9", bg: "#d1d4f9" },
  { id: 5, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Nora&backgroundColor=ffd5dc", bg: "#ffd5dc" },
  { id: 6, url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kai&backgroundColor=c0e8c0", bg: "#c0e8c0" },
];

const categories = ["PMO & Ops", "Marketing", "IT", "Product", "Sales", "HR", "Create any agent"];

function Avatar({ av, size }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-2xl overflow-hidden flex-shrink-0 border border-white/10"
      style={{ width: size, height: size, minWidth: size, background: av.bg }}
    >
      <img src={av.url} alt="" width={size} height={size} draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </span>
  );
}

// One repeating segment: [avatars left] [headline] [avatars right]
function Segment({ avs }) {
  return (
    <span className=" inline-flex items-center flex-shrink-0" style={{ paddingRight: 64 }}>
      {/* Left avatar cluster */}
      <span className="inline-flex items-end gap-2 flex-shrink-0 mx-6">
        <Avatar av={avs[0]} size={54} />
        <Avatar av={avs[1]} size={72} />
        <Avatar av={avs[2]} size={58} />
      </span>

      {/* Headline */}
      <span
        className="text-white whitespace-nowrap flex-shrink-0 select-none"
        style={{
          fontSize: "clamp(50px, 7vw, 134px)",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          fontFamily: "'Poppins', 'Arial Black', Arial, sans-serif",
        }}
      >
       <span className=" text-purple-500 font-bold">#1</span>  Platform for Coaches
      </span>

      
    </span>
  );
}

export default function DetailedFeatures() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const curX = useRef(0);
  const tgtX = useRef(0);
  const raf = useRef(null);
  const [x, setX] = useState(0);
  const [active, setActive] = useState("HR");

  // rAF lerp loop
  useEffect(() => {
    const tick = () => {
      curX.current += (tgtX.current - curX.current) * 0.09;
      setX(curX.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Map vertical scroll → horizontal offset
  // Progress starts when section ENTERS viewport from bottom (rect.top === vh)
  // and ends when section EXIT viewport from top (rect.bottom === 0)
  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Total travel distance: section top goes from +vh (just entered) to -sectionHeight (fully gone)
      const totalTravel = vh + wrapperRef.current.offsetHeight;
      // How far we've scrolled into that range (0 = not visible yet, totalTravel = fully past)
      const scrolled = vh - rect.top; // increases as we scroll down
      const progress = Math.max(0, Math.min(1, scrolled / totalTravel));
      const loopW = trackRef.current.scrollWidth / 3;
      tgtX.current = progress * loopW;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount in case already in view
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const loopW = trackRef.current ? trackRef.current.scrollWidth / 3 : 1;
  const safeX = ((x % loopW) + loopW) % loopW;

  // Alternate avatar order each segment for visual variety
  const seg2 = [...avatars].reverse();

  return (
    <div className="bg-black w-full min-h-screen">

      {/* ═══ STICKY SCROLL-DRIVEN BANNER ═══ */}
      <div ref={wrapperRef} className="relative" style={{ height: 580 }}>
        <div
          className=" bg-black overflow-hidden z-10"
          style={{ height: 180 }}
        >
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 z-20 pointer-events-none"
            style={{ width: 120, background: "linear-gradient(to right, #000 35%, transparent)" }} />
          <div className="absolute inset-y-0 right-0 z-20 pointer-events-none"
            style={{ width: 120, background: "linear-gradient(to left, #000 35%, transparent)" }} />

          {/* Scrolling track */}
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center"
              style={{ transform: `translateX(${-safeX}px)`, willChange: "transform", whiteSpace: "nowrap" }}
            >
              <Segment avs={avatars} />
              <Segment avs={seg2} />
              <Segment avs={avatars} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BELOW SECTION ═══ */}
      <div className="flex flex-col items-center text-center px-6 pt-4 pb-24">

        {/* Eyebrow */}
        <p className="text-white/40 text-[13px] font-medium mb-5"
          style={{ letterSpacing: "0.12em"}}>
         Platform Features       
        </p>

        {/* Main headline */}
        <h2
          className="text-white font-bold leading-[1.15] mb-10"
          style={{
            fontSize: "clamp(26px, 3.8vw, 46px)",
            letterSpacing: "-0.02em",
          }}
        >
          Everything You Need to Coach, <br/>
          Grow & Automate
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = cat === active;
            const isCreate = cat === "Create any agent";
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "rounded-full px-4 py-[7px] text-[13px] font-medium transition-all duration-200 border outline-none cursor-pointer",
                  isActive
                    ? "bg-violet-600 border-violet-600 text-white"
                    : isCreate
                    ? "bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white/90"
                    : "bg-transparent border-white/15 text-white/55 hover:border-white/35 hover:text-white/85",
                ].join(" ")}
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}