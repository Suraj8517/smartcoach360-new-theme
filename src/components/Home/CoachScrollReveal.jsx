import { useEffect, useRef, useState } from "react";
import outline from '../../assets/coach/outlinenew.avif';
import loaded from '../../assets/coach/loadednew.avif';
import leftImg from '../../assets/coach/left.png';
import rightImg from '../../assets/coach/right.png';
import avatar1 from "../../assets/crm/avatar/avatar5.png";
import avatar2 from "../../assets/crm/avatar/avatar3.png";
import avatar3 from "../../assets/crm/avatar/avatar8.png";
import { motion } from "framer-motion";
import DetailedFeatures from "./DetailedFeature";
const OUTLINE_IMG = outline;
const COLOR_IMG   = loaded;
const LEFT_IMG    = leftImg;
const RIGHT_IMG   = rightImg;
const AVATARS = [avatar1, avatar2, avatar3];
const url =import.meta.env.VITE_CALENDLY_LINK;

// ── Shared card shell ─────────────────────────────────────────────
const Card = ({ children, className = "", image, imageAlt = "" }) => (
  <div className={`bg-[#111111] border border-[#222] rounded-2xl p-3 shadow-xl shadow-black/60 ${className}`}>
    {children}
    {image && (
      <div className="mt-2 rounded-xl overflow-hidden border border-[#2a2a2a]">
        <img src={image} alt={imageAlt} className="w-full object-cover object-top" style={{ maxHeight: 90 }} />
      </div>
    )}
  </div>
);

const CardTitle = ({ children }) => (
  <p className="text-white text-[11px] font-semibold mb-2 tracking-wide">{children}</p>
);

// ── Card contents ─────────────────────────────────────────────────
const IntegrationsContent = () => (
  <Card>
    <CardTitle>Integrations</CardTitle>
    <div className="flex gap-2 flex-wrap">
      {[{ bg: "bg-[#4a1fa8]", char: "S" }, { bg: "bg-[#c5221f]", char: "M" }, { bg: "bg-[#1a6ec0]", char: "Z" }].map((app, i) => (
        <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${app.bg} flex items-center justify-center text-white font-bold text-lg`}>{app.char}</div>
      ))}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#555] text-xs font-semibold">+26</div>
    </div>
  </Card>
);

const DocsContent = () => (
  <Card>
    <CardTitle>Docs</CardTitle>
    <div className="bg-[#181818] rounded-lg p-2.5 border border-[#222]">
      <p className="text-white text-[10px] font-semibold mb-1.5">Q4 marketing: next steps</p>
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-bold shrink-0">G</div>
        <span className="text-[8px] text-violet-400">Graham Rowe</span>
        <span className="text-[8px] text-[#555]">Can you add the m...</span>
      </div>
      {["Optimize campaign performance", "Rebrand efforts", "Increase SEO ranking"].map((t, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-1">
          <div className={`w-3 h-3 rounded-[3px] shrink-0 ${i === 1 ? "bg-indigo-600" : "border border-[#333] bg-transparent"}`} />
          <span className={`text-[8px] ${i === 1 ? "text-white" : "text-[#555]"}`}>{t}</span>
        </div>
      ))}
    </div>
  </Card>
);

const DashboardContent = () => (
  <Card>
    <CardTitle>Dashboards</CardTitle>
    <div className="bg-white rounded-xl p-2.5">
      <div className="flex justify-between items-start mb-2">
        <p className="text-gray-900 text-base font-bold">$120,760</p>
        <div className="w-9 h-9 rounded-full shrink-0" style={{ background: "conic-gradient(#4f46e5 0% 38%, #22c55e 38% 62%, #f59e0b 62% 100%)" }} />
      </div>
      <div className="flex items-end gap-0.5 h-8 mb-1.5">
        {[40, 65, 48, 82, 55, 95, 60, 74].map((h, i) => (
          <div key={i} className={`flex-1 rounded-sm ${i === 5 ? "bg-indigo-500" : "bg-gray-200"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex items-center gap-1 mt-1">
        {[["bg-red-500","A"],["bg-purple-600","B"],["bg-cyan-500","C"],["bg-green-600","D"]].map(([c,l], i) => (
          <div key={i} className={`w-5 h-5 rounded-full ${c} flex items-center justify-center text-[7px] text-white font-bold`}
            style={{ marginLeft: i === 0 ? 0 : -5, border: "2px solid white" }}>{l}</div>
        ))}
        <span className="text-[8px] text-gray-400 ml-1">+4 members</span>
      </div>
    </div>
  </Card>
);

const FilesContent = () => (
  <Card>
    <CardTitle>Files</CardTitle>
    {[
      { name: "sales_targets_rev2", bg: "bg-[#1a6a3a]", icon: "X" },
      { name: "lead_scoring_model", bg: "bg-[#1a4a8a]", icon: "W" },
      { name: "sales_targets_rev2", bg: "bg-[#1a6a3a]", icon: "X" },
    ].map((f, i) => (
      <div key={i} className="flex items-center gap-2 mb-1.5 px-2 py-1.5 bg-[#181818] border border-[#222] rounded-lg">
        <div className={`w-5 h-5 rounded-md ${f.bg} flex items-center justify-center text-[9px] text-white font-bold shrink-0`}>{f.icon}</div>
        <span className="text-[9px] text-[#aaa] overflow-hidden text-ellipsis whitespace-nowrap">{f.name}</span>
      </div>
    ))}
  </Card>
);

const DataRecordsContent = () => (
  <div className="flex flex-col gap-2">
    <Card>
      <CardTitle>Data records</CardTitle>
      <p className="text-[9px] font-semibold text-violet-400 mb-1.5">Incoming feedback</p>
      {["Easy for my entire tea...", "Missing some key fea..."].map((t, i) => (
        <div key={i} className="text-[8px] text-[#555] py-1 border-b border-[#1e1e1e]">{t}</div>
      ))}
      <div className="flex gap-1 mt-2">
        {["bg-indigo-600", "bg-violet-500", "bg-violet-300"].map((c, i) => (
          <div key={i} className={`flex-1 h-1 rounded-full ${c}`} />
        ))}
      </div>
    </Card>
    <div className="bg-[#0a120a] border border-[#172417] rounded-2xl p-3 shadow-xl shadow-black/60">
      <p className="text-[11px] font-semibold text-green-400 mb-2 tracking-wide">Updates</p>
      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[9px] text-white font-bold shrink-0">B</div>
        <div>
          <p className="text-[8px] font-semibold text-[#ccc] mb-0.5">Ben</p>
          <p className="text-[8px] text-[#666] leading-relaxed">
            Hi <span className="text-indigo-400">@Everyone on this board</span>, here's the <span className="text-indigo-400">link</span> to the first draft. Wdyt?
          </p>
          <div className="flex gap-3 mt-1.5">
            {["👍 Like", "↩ Reply"].map((a, i) => (
              <span key={i} className="text-[8px] text-[#444]">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConversationsContent = () => (
  <Card>
    <div className="flex justify-between items-center mb-2">
      <p className="text-white text-[11px] font-semibold">Conversations</p>
      <span className="text-[8px] text-violet-400">monday sidekick ▾</span>
    </div>
    <div className="bg-indigo-600 rounded-lg px-2 py-1.5 mb-2 max-w-[85%]">
      <span className="text-[8px] text-white">Create an end-to-end ticket routing workflow</span>
    </div>
    <div className="flex items-center gap-1.5 mb-1.5">
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center text-[6px] text-white font-bold">AI</div>
      <span className="text-[8px] text-[#444]">Processing your request...</span>
    </div>
    <div className="bg-[#181818] border border-[#222] rounded-lg px-2 py-1.5">
      <span className="text-[8px] text-[#999] leading-relaxed">Hi there! Here's how I'll structure your workflow...</span>
    </div>
  </Card>
);


const PHASE1_END = 0.15;   // outline fully visible
const PHASE2_END = 0.88;   // cards fully centered, start to fade

const FLANK_START = 0.50;  // start fading in side images (loaded image is fully visible by ~0.43)
const FLANK_END   = 0.80;  // side images fully opaque

const MarqueeText = ({ progress }) => {
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const p = clamp01((progress - PHASE1_END) / (PHASE2_END - PHASE1_END));
  const opacity = clamp01(p * 6);

  // Eased slide: starts off-screen right, lands centered, stays there
  const eased = 1 - Math.pow(1 - Math.min(p, 1), 2.5);
  const translateX = `${(1 - eased) * 110}vw`;

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: 0,
          right: 0,
          zIndex: 350,
          pointerEvents: "none",
          opacity,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <p style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          transform: `translateX(${translateX})`,
          willChange: "transform",
          transition: "none",
          margin: 0,
          fontFamily: "'Anton', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
          lineHeight: 1,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.88)",
        }}>
          #1 Platform for Coaches 
        </p>
      </div>
    </>
  );
};

const MobileVersion = () => (
  <div className="bg-black text-white pt-12">

    {/* ── Full-bleed hero ── */}
    <div className="relative w-full min-h-[50vh] overflow-hidden flex flex-col justify-end">

      {/* Coach image */}
      <img
        src={COLOR_IMG}
        alt="coach"
        className="absolute inset-0 w-full h-full object-cover object-top z-[1]"
      />

      {/* Flat black overlay */}
      <div className="absolute inset-0 bg-black/45 z-[2]" />

      {/* Bottom fog */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-black/95 via-black/70 to-transparent z-[3]" />


      {/* Content */}
      <div className="relative z-10 px-6 pb-11">

        {/* Live badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[5px] h-[5px] rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
            The future of coaching
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-light leading-none tracking-[-0.035em] mb-4"
          style={{ fontSize: "clamp(3rem, 10vw, 4.4rem)" }}>
          All In One<br />
          <span style={{
            background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 55%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Platform
          </span>
        </h1>

        <p className="text-[13px] text-white/45 leading-relaxed mb-7 font-light max-w-[72%]">
          Stop juggling apps. Manage clients, programmes, and payments — built for coaches who scale.
        </p>

        <button onClick={() => window.open(url, "_blank")} className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-medium rounded-full px-6 py-3 tracking-[0.01em]">
          Get Started  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
        </button>
      </div>
    </div>

    {/* ── Footer strip ── */}
    <div className="h-px mx-6 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    <div className="flex justify-between items-center px-6 py-6">
      <span className="text-[10px] tracking-[0.15em] uppercase text-white/20">
        #1 Platform for Coaches
      </span>
      <span className="border border-white/[0.08] rounded-full px-3 py-1 text-[10px] text-white/25 tracking-[0.05em]">
        2,000+ coaches
      </span>
    </div>

  </div>
);
// ── Card definitions ──────────────────────────────────────────────
const cards = [
  {
    id: "integrations",
    position:       { top: "22%",  left: "18%" },
    lgPosition:     { top: "20%",  left: "16%" },
    width: { desktop: 240, lg: 200, tablet: 190 },
    content: <IntegrationsContent />,
  },
  {
    id: "docs",
    position:       { top: "8%",  left: "36%" },
    lgPosition:     { top: "8%",  left: "34%" },
    width: { desktop: 230, lg: 195, tablet: 185 },
    content: <DocsContent />,
  },
  {
    id: "dashboard",
    position:       { top: "12%",  right: "22%" },
    lgPosition:     { top: "8%",  right: "22%" },
    width: { desktop: 260, lg: 215, tablet: 205 },
    content: <DashboardContent />,
  },
  {
    id: "files",
    position:       { top: "46%", left: "8%" },
    lgPosition:     { top: "40%", left: "1%" },
    width: { desktop: 230, lg: 190, tablet: 185 },
    content: <FilesContent />,
  },
  {
    id: "datarecords",
    position:       { top: "36%", right: "12%" },
    lgPosition:     { top: "34%", right: "11%" },
    width: { desktop: 250, lg: 208, tablet: 200 },
    content: <DataRecordsContent />,
  },
  {
    id: "conversations",
    position:       { bottom: "6%", left: "12%" },
    lgPosition:     { bottom: "4%", left: "1%" },
    width: { desktop: 240, lg: 200, tablet: 195 },
    content: <ConversationsContent />,
  },
];

function getCardWidth(card, windowWidth) {
  if (windowWidth < 1280) return card.width.lg;      // lg screens (1024–1279)
  return card.width.desktop;                          // xl+
}

function getCardPosition(card, windowWidth) {
  if (windowWidth < 1280) return card.lgPosition;
  return card.position;
}

// ── Main component ────────────────────────────────────────────────
export default function CoachScrollReveal() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1280);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const rect  = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      const raw   = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(raw);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show mobile version on small screens
   if (windowWidth < 768) {
    return <MobileVersion />;
  }
  if (windowWidth < 1024) {
    return <DetailedFeatures />;
  }
 

  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const ease    = (t) => 1 - Math.pow(1 - t, 1.5);
  const phaseP  = (start, end) => ease(clamp01((progress - start) / (end - start)));

  // Phase 1: outline builds + character scales in
  const p1          = phaseP(0, PHASE1_END);
  const charScale   = 0.72 + 0.28 * p1;
  const outlineBase = clamp01(p1 * 2.5);

  // Phase 2: cards animate to center (ONLY starts after Phase 1 completes)
  const p2 = phaseP(PHASE1_END, PHASE2_END);

  // cardProgress only starts ramping after outline is fully visible
  const cardProgress = Math.min(p2, 0.6);

  // Cards fade out in the second half of phase 2
  const cardOpacity  = clamp01(1 - (p2 - 0.2) * 6);
  const cardScale    = 1 - Math.min(p2, 0.6) * 0.12;

  const p3             = phaseP(PHASE2_END, 1);
  const colorOpacity   = clamp01(phaseP(PHASE1_END, 1) * 3);
  const outlineOpacity = outlineBase * (1 - clamp01(p3 * 2.5));

  const flankRaw     = clamp01((progress - FLANK_START) / (FLANK_END - FLANK_START));
  const flankEased   = 1 - Math.pow(1 - flankRaw, 2);   // ease-out quad
  const flankOpacity = flankEased;

  const LEFT_SLIDE_START  = -8;   // vw offset when hidden
  const RIGHT_SLIDE_START =  8;   // vw offset when hidden
  const leftTranslateX  = `${LEFT_SLIDE_START  * (1 - flankEased)}vw`;
  const rightTranslateX = `${RIGHT_SLIDE_START * (1 - flankEased)}vw`;

const SCROLL_LENGTH = 4;

  const getXTranslate = (pos, cardW) => {
    if (pos.left)  return `calc(${cardProgress} * (50vw - ${pos.left} - ${cardW / 2}px))`;
    if (pos.right) return `calc(${-cardProgress} * (50vw - ${pos.right} - ${cardW / 2}px))`;
    return "0px";
  };

  const getYTranslate = (pos) => {
    if (pos.top)    return `calc(${cardProgress} * (50vh - ${pos.top} - 80px))`;
    if (pos.bottom) return `calc(${-cardProgress} * (50vh - ${pos.bottom} - 80px))`;
    return "0px";
  };

  return (
    <>
    <DetailedFeatures/>
    <div ref={containerRef} className="hidden xl:block relative bg-black pt-16 "  style={{ height: `${SCROLL_LENGTH * 150}vh` }}>

      {/* ── Hero text ── */}
      <div className="max-w-6xl lg:max-w-6xl relative z-50 w-full mx-auto flex flex-col items-center px-8 pt-10 pb-6 lg:flex-row lg:items-start lg:justify-between lg:pt-12 xl:px-16 xl:pt-16">
        <h1
          className="text-white font-medium tracking-[-0.04em] leading-[0.92] text-center lg:text-left"
          style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
        >
          All In One<br /><span className="tracking-[0.01em] ">Platform</span>
        </h1>
        <div className="flex flex-col items-center mt-6 lg:items-start lg:mt-0 lg:max-w-[36%] lg:pt-4 xl:pt-14 2xl:pl-16">
         <p className=" text-white font-normal leading-[1.6] tracking-[.04rem] text-center mb-3 text-[13px] lg:text-left lg:text-[14px] xl:text-[1rem]">
  Stop juggling apps. Manage clients, programmes, nutrition, payments, and messages, all in one place built for coaches who want to scale.
</p>
           <button onClick={() => window.open(url, "_blank")} className="flex items-center gap-2 bg-white text-black font-semibold rounded-full px-5 py-2.5 text-[13px] transition-all duration-200 hover:bg-[#f2f2f2] group active:scale-95 lg:text-[14px] lg:px-6 lg:py-3 group">
            Book a Demo
               <svg className="group-hover:translate-x-1 transition-transform duration-300" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
          </button>
        </div>
      </div>

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen bg-black overflow-hidden">
        <div className="relative w-full h-full">

          {/* ── Cards ── */}
          {cards.map((card) => {
            const pos   = getCardPosition(card, windowWidth);
            const cardW = getCardWidth(card, windowWidth);
            return (
              <div
                key={card.id}
                className="absolute pointer-events-none"
                style={{
                  ...pos,
                  width: cardW,
                  opacity: cardOpacity,
                  zIndex: 20,
                  transform: `translate(${getXTranslate(pos, cardW)}, ${getYTranslate(pos)}) scale(${cardScale})`,
                  willChange: "transform, opacity",
                  transition: "none",
                }}
              >
                {card.content}
              </div>
            );
          })}
<MarqueeText progress={progress} />
          {/* ── Character image stack (full screen) ── */}
          <div
            className="absolute inset-0 w-full h-full z-50"
            
          >
            

            {/* ── LEFT flanking image (left-facing group) ── */}
            <img
              src={LEFT_IMG}
              alt="coach group left"
              className="absolute bottom-0 pointer-events-none"
              style={{
                height: "82vh",
                width: "auto",
                opacity: flankOpacity,
                right: "calc(53%)",
                willChange: "opacity",
                zIndex: 3,
                objectFit: "contain",
                objectPosition: "right bottom",
              }}
            />

            {/* ── RIGHT flanking image (right-facing group) ── */}
            <img
              src={RIGHT_IMG}
              alt="coach group right"
              className="absolute bottom-0 pointer-events-none"
              style={{
                height: "82vh",
                width: "auto",
                opacity: flankOpacity,
                left: "calc(52%)",
                willChange: "opacity",
                zIndex: 3,
                objectFit: "contain",
                objectPosition: "left bottom",
              }}
            />

            {/* Color image (center) */}
            <img
              src={COLOR_IMG}
              alt="coach colored"
              className="absolute left-1/2 bottom-0 object-contain pointer-events-none"
              style={{
                height: "88vh",
                width: "auto",
                opacity: colorOpacity,
                transform: `translateX(-50%) scale(${charScale})`,
                transformOrigin: "center bottom",
                willChange: "opacity, transform",
                zIndex: 4,
              }}
            />

            {/* Outline image (center) */}
            <img
              src={OUTLINE_IMG}
              alt="coach outline"
              className="absolute left-1/2 bottom-0 object-contain pointer-events-none"
              style={{
                height: "88vh",
                width: "auto",
                opacity: outlineOpacity,
                transform: `translateX(-50%) scale(${charScale})`,
                transformOrigin: "center bottom",
                willChange: "opacity, transform",
                zIndex: 1,
              }}
            />
          </div>

        </div>

        {/* ── Bottom black fade overlay ── */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: "420px",
            zIndex: 50,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.75) 70%, #000 100%)",
          }}
        />
      </div>

    </div>
    </>
  );
}