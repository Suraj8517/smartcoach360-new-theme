import { useEffect, useRef, useState } from "react";
import outline from '../../../assets/coach/OUTLINE.avif'
import loaded from '../../../assets/coach/loaded.avif'

const OUTLINE_IMG = outline;
const COLOR_IMG   = loaded;

const cards = [
  {
    id: "integrations",
    label: "Integrations",
    position: { top: "8%", left: "2%" },
    mobilePosition: { top: "4%", left: "1%" },
    content: (
      <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
        {["🟣", "📧", "🔵", "⚡"].map((icon, i) => (
          <div key={i} style={{
            width: 30, height: 30, borderRadius: 7,
            background: "#1e1e2e", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: 14
          }}>{icon}</div>
        ))}
        <div style={{
          width: 30, height: 30, borderRadius: 7,
          background: "#1e1e2e", display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 10, color: "#888"
        }}>+26</div>
      </div>
    ),
  },
  {
    id: "workflow",
    label: "Workflow",
    position: { top: "22%", right: "2%" },
    mobilePosition: { top: "18%", right: "1%" },
    content: (
      <div style={{ marginTop: 8 }}>
        {["Plan sprint goals", "Review PRs", "Deploy staging"].map((t, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 7,
            marginBottom: 7, fontSize: 11, color: "#ccc"
          }}>
            <div style={{
              width: 13, height: 13, borderRadius: 3,
              border: i === 1 ? "none" : "1.5px solid #555",
              background: i === 1 ? "#7c3aed" : "transparent",
              flexShrink: 0
            }} />
            <span style={{
              textDecoration: i === 1 ? "line-through" : "none",
              color: i === 1 ? "#555" : "#ccc"
            }}>{t}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "files",
    label: "Files",
    position: { bottom: "28%", left: "3%" },
    mobilePosition: { bottom: "24%", left: "1%" },
    content: (
      <div style={{ marginTop: 8 }}>
        {["sales_targets_rev2", "lead_scoring_model", "sales_targets_rev2"].map((f, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 7,
            marginBottom: 6, fontSize: 11, color: "#ccc"
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: 3,
              background: i === 1 ? "#1a4a8a" : "#1a6a3a",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 9, color: "#fff", fontWeight: 700
            }}>{i === 1 ? "W" : "X"}</div>
            {f}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "dashboard",
    label: "Dashboard",
    position: { top: "6%", right: "2%" },
    mobilePosition: { top: "4%", right: "1%" },
    content: (
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>$120,760</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 34 }}>
          {[60, 80, 50, 90, 70, 100, 65].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: 3,
              background: i === 5 ? "#7c3aed" : "#2a2a3a"
            }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "datarecords",
    label: "Data Records",
    position: { bottom: "18%", right: "2%" },
    mobilePosition: { bottom: "14%", right: "1%" },
    content: (
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 11, color: "#7c3aed", marginBottom: 5, fontWeight: 600 }}>Incoming feedback</div>
        {["Easy for my entire team to...", "Missing some key features th..."].map((t, i) => (
          <div key={i} style={{
            fontSize: 10, color: "#aaa", padding: "4px 0",
            borderBottom: "1px solid #222"
          }}>{t}</div>
        ))}
      </div>
    ),
  },
  {
    id: "conversations",
    label: "Conversations",
    position: { bottom: "8%", left: "2%" },
    mobilePosition: { bottom: "6%", left: "1%" },
    content: (
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 10, color: "#7c3aed", marginBottom: 5 }}>monday sidekick</div>
        <div style={{
          background: "#1e1e2e", borderRadius: 6, padding: "5px 7px",
          fontSize: 10, color: "#ccc", lineHeight: 1.5
        }}>Create an end-to-end ticket routing workflow</div>
      </div>
    ),
  },
];

export default function CoachScrollReveal() {
  const containerRef = useRef(null);
  const [progress, setProgress]   = useState(0);
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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

  // ── Unified scroll values ───────────────────────────────────────────
  const cardProgress = progress;
  const cardOpacity  = 1 - cardProgress;
  const cardScale    = 1 - cardProgress * 0.15;

  // Outline image fades out as you scroll down
  const outlineOpacity = 1 - progress;
  const growPeak       = Math.sin(progress * Math.PI);
  const outlineScale   = 1 + growPeak * 0.08;
  const colorScale     = 1.08;

  // Black mask layer:
  //   progress = 0  → opacity 1  (fully black — hides color image behind outline)
  //   progress = 1  → opacity 0  (transparent — color image fully visible)
  const blackMaskOpacity = 1 - progress;

  // ── Responsive ─────────────────────────────────────────────────────
  const cardWidth    = isMobile ? 130 : 200;
  const cardPadding  = isMobile ? "8px 10px" : "12px 14px";
  const cardFontSize = isMobile ? 10 : 12;

  return (
    <div ref={containerRef} style={{ height: "600vh", background: "#000", position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#000", overflow: "hidden",
      }}>

        {/* Cards — behind the character (zIndex 3) */}
        {cards.map((card) => {
          const pos = isMobile ? card.mobilePosition : card.position;
          return (
            <div
              key={card.id}
              style={{
                position: "absolute",
                ...pos,
                width: cardWidth,
                background: "#111",
                border: "1px solid #222",
                borderRadius: 10,
                padding: cardPadding,
                opacity: cardOpacity,
                transform: `translate(
                  ${pos.left
                    ? `calc(${cardProgress} * (50vw - ${pos.left} - ${cardWidth / 2}px))`
                    : `calc(${-cardProgress} * (50vw - ${pos.right || "0px"} - ${cardWidth / 2}px))`},
                  ${pos.top
                    ? `calc(${cardProgress} * (50vh - ${pos.top} - 60px))`
                    : `calc(${-cardProgress} * (50vh - ${pos.bottom || "0px"} - 60px))`}
                ) scale(${cardScale})`,
                transition: "none",
                pointerEvents: "none",
                zIndex: 3,
              }}
            >
              <div style={{ fontSize: cardFontSize, fontWeight: 600, color: "#fff", letterSpacing: "0.03em" }}>
                {card.label}
              </div>
              {card.content}
            </div>
          );
        })}

        {/* Character image stack */}
        <div style={{
          position: "relative",
          width: isMobile ? "min(280px, 80vw)" : "min(460px, 88vw)",
          aspectRatio: "3/4",
          zIndex: 5,
        }}>

          {/* Layer 1 — Color image (bottom) */}
          <img
            src={COLOR_IMG}
            alt="coach colored"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover",
              transform: `scale(${colorScale})`,
              transformOrigin: "center center",
              zIndex: 1,
            }}
          />

          <div
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    opacity: blackMaskOpacity,

    // SAME AS IMAGE
    transform: `scale(${colorScale})`,
    transformOrigin: "center center",

    zIndex: 2,
    pointerEvents: "none",
  }}
/>

          {/* Layer 3 — Outline image (top): fades out in sync with the black mask */}
          <img
            src={OUTLINE_IMG}
            alt="coach outline"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover",
              opacity: outlineOpacity,
              transform: `scale(${outlineScale})`,
              transformOrigin: "center center",
              willChange: "opacity, transform",
              zIndex: 3,
            }}
          />

        </div>

      </div>
    </div>
  );
}