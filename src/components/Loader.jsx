import { useEffect, useRef, useState } from "react";

const PHASES = [
  {
    letters: [
      { c: "S", ol: true },
      { c: "M", ol: false },
      { c: "A", ol: false },
      { c: "R", ol: false },
      { c: "T", ol: false },
    ],
  },
  {
    letters: [
      { c: "C", ol: true },
      { c: "O", ol: false },
      { c: "A", ol: false },
      { c: "C", ol: false },
      { c: "H", ol: false },
      { c: "3", ol: false },
      { c: "6", ol: false },
      { c: "0", ol: true },
    ],
  },
  {
    letters: [
      { c: "S", ol: true },
      { c: "M", ol: false },
      { c: "A", ol: false },
      { c: "R", ol: false },
      { c: "T", ol: false },
      { c: "C", ol: true },
      { c: "O", ol: false },
      { c: "A", ol: false },
      { c: "C", ol: false },
      { c: "H", ol: false },
      { c: "3", ol: false },
      { c: "6", ol: false },
      { c: "0", ol: true },
    ],
    slide: true,
  },
];

const DURATIONS = [1000, 1200, 1800];
const TOTAL_MS = 5000;

export default function SmartCoach360Loader({ children }) {
  const [show, setShow] = useState(false);
  const [hiding, setHiding] = useState(false);
  const rowRef = useRef(null);
  const timers = useRef([]);

  function addTimer(fn, ms) {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  }

  function clearAllTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function build(phase, isSlide) {
    const row = rowRef.current;
    if (!row) return;
    row.innerHTML = "";
    phase.letters.forEach((l, i) => {
      const el = document.createElement("span");

      // base inline styles — Tailwind can't animate arbitrary keyframes so we use inline style for animation
      el.style.fontFamily = "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif";
      el.style.fontWeight = "500";
      el.style.fontSize = "clamp(50px, 7vw, 80px)";
      el.style.lineHeight = "1";
      el.style.letterSpacing = "-1px";
      el.style.display = "inline-block";
      el.style.willChange = "transform, opacity";
      el.style.animationFillMode = "both";
      el.style.animationDuration = "0.3s";
      el.style.animationTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.animationName = isSlide ? "scSlideIn" : "scDropIn";
      el.style.animationDelay = i * 0.035 + "s";

      if (l.ol) {
        el.style.color = "transparent";
        el.style.webkitTextStroke = "3.5px #fff";
      } else {
        el.style.color = "#ffffff";
      }

      el.textContent = l.c;
      row.appendChild(el);
    });
  }

  function animOut(cb) {
    const row = rowRef.current;
    if (!row) return;
    const letters = row.querySelectorAll("span");
    letters.forEach((el, i) => {
      el.style.animationName = "scFlyOut";
      el.style.animationDuration = "0.22s";
      el.style.animationTimingFunction = "cubic-bezier(0.55, 0, 1, 0.45)";
      el.style.animationDelay = i * 0.02 + "s";
    });
    addTimer(cb, letters.length * 20 + 260);
  }

  function runPhase(i) {
    if (!rowRef.current) return;
    build(PHASES[i], !!PHASES[i].slide);
    addTimer(() => {
      animOut(() => {
        if (rowRef.current) rowRef.current.innerHTML = "";
        if (i < PHASES.length - 1) {
          addTimer(() => runPhase(i + 1), 40);
        }
      });
    }, DURATIONS[i]);
  }

  useEffect(() => {
    if (sessionStorage.getItem("sc360_loaded")) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    addTimer(() => runPhase(0), 100);

    addTimer(() => {
      setHiding(true);
      addTimer(() => {
        setShow(false);
        setHiding(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("sc360_loaded", "1");
      }, 600);
    }, TOTAL_MS);

    return () => {
      clearAllTimers();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        @keyframes scDropIn {
          0%   { opacity: 1; transform: translateY(-130%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scSlideIn {
          0%   { opacity: 0; transform: translateY(-130%); }
          8%   { opacity: 1; }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scFlyOut {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(115%); }
        }
      `}</style>

      {show && (
        <div
          className={`bg-black 
            fixed inset-0 z-[99999]
            flex items-center justify-center
            overflow-hidden
            transition-opacity duration-[600ms] ease-in-out
            ${hiding ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(120,60,220,0.22) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(80,20,180,0.14) 0%, transparent 60%)",
            }}
          />

          {/* Letter row */}
          <div
            ref={rowRef}
            className="relative z-10 flex items-end leading-none"
          />
        </div>
      )}

      {children}
    </>
  );
}