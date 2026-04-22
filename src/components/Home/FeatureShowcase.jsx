import { useState } from "react";
import {
  LayoutGrid, Megaphone, Users, Code2, Monitor, Sparkles,
  Bot, Wrench, Zap, Calendar, Phone, Image, ChevronRight,
  Check, ChevronLeft
} from "lucide-react";
import chat from "../../assets/crm/chat.png"
const FEATURES = [
  {
    id: 0,
    key: "Program Management",
    label: "Program\nManagement",
    Icon: LayoutGrid,
    agentName: "Meeting Scheduler Agent",
    agentStat: "24 meetings scheduled",
    AgentStatIcon: Calendar,
    agentColor: "from-violet-300 to-indigo-400",
    agentEmoji: "🤖",
    screenshotImage: chat,
    screenshotImageMobile: chat,
    floatingLabels: ["RSVP Agent", "Copy for ads"],
  },
  {
    id: 1,
    key: "Nutrition & Activity",
    label: "Nutrition & Activity",
    Icon: Megaphone,
    agentName: "Asset Generator Agent",
    agentStat: "30 assets generated",
    AgentStatIcon: Image,
    agentColor: "from-pink-300 to-rose-400",
    agentEmoji: "🎨",
    screenshotImage: "/screenshots/hero-marketing.avif",
    screenshotImageMobile: "/screenshots/hero-marketing-mobile.avif",
    floatingLabels: ["RSVP Agent", "Ad copy for ads"],
  },
  {
    id: 2,
    key: "crm",
    label: "CRM",
    Icon: Users,
    agentName: "Sales Agent",
    agentStat: "52 prospects called",
    AgentStatIcon: Phone,
    agentColor: "from-blue-300 to-cyan-400",
    agentEmoji: "👥",
    screenshotImage: "/screenshots/hero-crm.avif",
    screenshotImageMobile: "/screenshots/hero-crm-mobile.avif",
    floatingLabels: ["Import my contacts", "Lead Agent"],
  },
  {
    id: 3,
    key: "software",
    label: "Software",
    Icon: Code2,
    agentName: "Coding Agent",
    agentStat: "7 PRs created",
    AgentStatIcon: Code2,
    agentColor: "from-emerald-300 to-teal-400",
    agentEmoji: "💻",
    screenshotImage: "/screenshots/hero-software.avif",
    screenshotImageMobile: "/screenshots/hero-software-mobile.avif",
    floatingLabels: ["Sprint Agent", "Bug tracker"],
  },
  {
    id: 4,
    key: "it",
    label: "IT",
    Icon: Monitor,
    agentName: "IT Support Agent",
    agentStat: "18 tickets closed",
    AgentStatIcon: Wrench,
    agentColor: "from-orange-300 to-amber-400",
    agentEmoji: "🖥️",
    screenshotImage: "/screenshots/hero-it.avif",
    screenshotImageMobile: "/screenshots/hero-it-mobile.avif",
    floatingLabels: ["Infra Agent", "Security scan"],
  },
  {
    id: 5,
    key: "ai_assistant",
    label: "AI\nAssistant",
    Icon: Sparkles,
    agentName: "AI Assistant",
    agentStat: "142 queries answered",
    AgentStatIcon: Sparkles,
    agentColor: "from-yellow-300 to-orange-400",
    agentEmoji: "✨",
    screenshotImage: "/screenshots/hero-ai.avif",
    screenshotImageMobile: "/screenshots/hero-ai-mobile.avif",
    floatingLabels: ["Sidekick", "Smart summary"],
  },
  {
    id: 6,
    key: "ai_agents",
    label: "AI\nAgents",
    Icon: Bot,
    agentName: "Portfolio Agent",
    agentStat: "4 risks flagged",
    AgentStatIcon: Bot,
    agentColor: "from-purple-300 to-indigo-400",
    agentEmoji: "🤖",
    screenshotImage: "/screenshots/hero-agents.avif",
    screenshotImageMobile: "/screenshots/hero-agents-mobile.avif",
    floatingLabels: ["Automation Agent", "Task Agent"],
  },
  {
    id: 7,
    key: "app_builder",
    label: "AI\nApp builder",
    Icon: Wrench,
    agentName: "Builder Agent",
    agentStat: "3 apps deployed",
    AgentStatIcon: Wrench,
    agentColor: "from-red-300 to-pink-400",
    agentEmoji: "🔧",
    screenshotImage: "/screenshots/hero-builder.avif",
    screenshotImageMobile: "/screenshots/hero-builder-mobile.avif",
    floatingLabels: ["No-code builder", "Widget Agent"],
  },
  {
    id: 8,
    key: "workflows",
    label: "AI\nWorkflows",
    Icon: Zap,
    agentName: "Workflow Agent",
    agentStat: "21 automations run",
    AgentStatIcon: Zap,
    agentColor: "from-cyan-300 to-blue-400",
    agentEmoji: "⚡",
    screenshotImage: "/screenshots/hero-workflows.avif",
    screenshotImageMobile: "/screenshots/hero-workflows-mobile.avif",
    floatingLabels: ["Auto-assign", "Trigger Agent"],
  },
];

// ── Agent Badge ──────────────────────────────────────────────
const AgentBadge = ({ feature, animKey }) => {
  const { AgentStatIcon } = feature;
  return (
    <div
      key={`badge-${animKey}`}
      className="inline-flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-2.5 pr-4"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
        animation: "slideUp 0.38s cubic-bezier(.22,1,.36,1) 0.1s both",
      }}
    >
      <div
        className={`w-[52px] h-[52px] rounded-xl flex-shrink-0 bg-gradient-to-br ${feature.agentColor} flex items-center justify-center text-xl`}
      >
        {feature.agentEmoji}
      </div>
      <div>
        <p className="text-[13px] font-bold text-gray-900 mb-1">{feature.agentName}</p>
        <div className="flex items-center gap-1.5">
          <AgentStatIcon size={13} className="text-gray-400 flex-shrink-0" />
          <span className="text-[11px] text-gray-500">{feature.agentStat}</span>
        </div>
      </div>
    </div>
  );
};

// ── Skeleton placeholder ─────────────────────────────────────
const SkeletonScreen = () => (
  <div className="w-full h-full flex flex-col" style={{ minHeight: "460px", background: "#f5f5ff" }}>
    <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
      <div className="w-24 h-5 rounded-lg bg-indigo-100" />
      <div className="flex gap-1.5">
        {[60, 50, 70].map((w, i) => (
          <div key={i} className="h-5 rounded-full bg-gray-100" style={{ width: w }} />
        ))}
      </div>
    </div>
    <div className="px-5 py-5 flex flex-col gap-3">
      <div className="w-44 h-7 rounded-xl bg-indigo-100 mb-1" />
      {[75, 90, 60, 82, 68, 78].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-200 flex-shrink-0" />
          <div className="h-3.5 rounded-lg bg-gray-100" style={{ width: `${w}%` }} />
          <div
            className="w-20 h-5 rounded-full ml-auto flex-shrink-0"
            style={{
              background: i % 3 === 0 ? "#dcfce7" : i % 3 === 1 ? "#fef9c3" : "#fee2e2",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// ── Explore Panel ────────────────────────────────────────────
// onClick only, no onMouseEnter; same item click = deselect
const ExplorePanel = ({ active, onSelect }) => (
  <div
    className="bg-[#F6F7FB] rounded-xl border border-gray-100 py-8 px-4"
    style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.12)", width: "370px" }}
  >
    <h3 className="text-[15px] font-medium text-gray-900 text-center mb-4 leading-snug">
      What would you like to{" "}
      <span style={{ color: "#6E0ACE" }}>explore?</span>
    </h3>

    <div className="grid grid-cols-3 gap-2 mb-4 mt-6">
      {FEATURES.map((f) => {
        const isActive = active === f.id;
        const { Icon } = f;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className="relative flex flex-col items-center justify-center gap-1.5 rounded-lg border p-3 transition-all duration-150 cursor-pointer"
            style={{
              minHeight: "100px",minWidth: "104px",
              borderColor: isActive ? "#6E0ACE" : "#e5e7eb",
              background:"#fff",
            }}
          >
            <div
              className="absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded-sm flex items-center justify-center transition-all"
              style={{
                border: isActive ? "none" : "1.5px solid #6E0ACE",
                background: isActive ? "#6E0ACE" : "transparent",
              }}
            >
              {isActive && <Check size={9} strokeWidth={3} className="text-white" />}
            </div>
            <Icon size={22} strokeWidth={1.7} style={{ color: isActive ? "#6E0ACE" : "#6b7280" }} />
            <span
              className="text-[10px] font-light text-center leading-tight whitespace-pre-line"
              style={{ color:"#374151" }}
            >
              {f.label}
            </span>
          </button>
        );
      })}
    </div>
<div className="flex justify-center ">
    <button
      className="w-[50%] rounded-full py-3 text-[13.5px] font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 group hover:opacity-90 active:scale-95"
      style={{
        background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
        boxShadow: "0 4px 18px rgba(97,97,255,0.35)",
      }}
    >
      Get Started
      <ChevronRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200"/>
    </button>

</div>
  </div>
);

// ── Main Component ───────────────────────────────────────────
export default function FeatureShowcase() {
  // null = nothing selected → show FEATURES[0] content with blur overlay
  const [active, setActive] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  // Mobile carousel
  const [mobIndex, setMobIndex] = useState(0);

  // Always render first feature's content; blur it when nothing is selected
  const displayFeature = active !== null ? FEATURES[active] : FEATURES[0];
  const isBlurred = active === null;

  const handleSelect = (id) => {
    if (id === active) {
      // clicking active item deselects → back to blurred first feature
      setActive(null);
      setAnimKey((k) => k + 1);
      return;
    }
    setActive(id);
    setAnimKey((k) => k + 1);
    setImgFailed(false);
  };

  const mobPrev = () => setMobIndex((i) => (i - 1 + FEATURES.length) % FEATURES.length);
  const mobNext = () => setMobIndex((i) => (i + 1) % FEATURES.length);
  const mobFeature = FEATURES[mobIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .fs-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .fs-root { font-family: 'Poppins', sans-serif; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(14px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .img-anim { animation: imgFade 0.3s ease both; }
        .floating-tag { animation: slideUp 0.4s ease both; }
      `}</style>

      <section className="fs-root w-full bg-white px-4 sm:px-6 lg:px-10">
        <div className="2xl:max-w-5xl max-w-4xl  mx-auto">


          {/* ══ DESKTOP ══════════════════════════════════════════════ */}
          <div className="hidden lg:block">
            <div className="relative" style={{ minHeight: "660px" }}>

              <div
                className="absolute top-[72px] left-0 bottom-0 rounded-xl overflow-hidden border border-gray-100"
                style={{ width: "100%", boxShadow: "0 16px 60px rgba(0,0,0,0.10)" }}
              >
                {!imgFailed ? (
                  <img
                    key={`img-${animKey}`}
                    src={displayFeature.screenshotImage}
                    alt={displayFeature.label}
                    className="img-anim w-full h-full object-cover object-top"
                    style={{ minHeight: "560px" }}
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <SkeletonScreen />
                )}

                {isBlurred && (
                  <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      background: "rgba(245,245,255,0.50)",
                    }}
                  >
                     </div>
                )}
              </div>

              {/* Floating labels — blurred alongside screenshot when nothing selected */}
              <div
                className="absolute z-20 flex flex-col gap-2.5 transition-all duration-300"
                style={{
                  bottom: "90px",
                  left: "calc(70% - 200px)",
                  opacity: isBlurred ? 0.35 : 1,
                  filter: isBlurred ? "blur(4px)" : "none",
                  pointerEvents: isBlurred ? "none" : "auto",
                }}
              >
                {displayFeature.floatingLabels.map((lbl, i) => (
                  <div
                    key={`${lbl}-${animKey}`}
                    className="floating-tag flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-100 whitespace-nowrap"
                    style={{
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                      animationDelay: `${0.05 + i * 0.1}s`,
                    }}
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`lgd${i}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#6161ff" />
                          <stop offset="100%" stopColor="#00c2ff" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill={`url(#lgd${i})`} />
                    </svg>
                    <span className="text-[11px] font-semibold text-gray-800">{lbl}</span>
                    <div className="flex gap-1 ml-1">
                      <span className="h-1 w-7 rounded-full bg-red-400 opacity-60" />
                      <span className="h-1 w-4 rounded-full bg-amber-400 opacity-60" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Agent badge — blurred when nothing selected */}
              <div
                className="absolute z-20 transition-all duration-300"
                style={{
                  bottom: "-60px",
                  left: "-60px",
                  opacity: isBlurred ? 0.35 : 1,
                  filter: isBlurred ? "blur(4px)" : "none",
                  pointerEvents: isBlurred ? "none" : "auto",
                }}
              >
                <AgentBadge feature={displayFeature} animKey={animKey} />
              </div>

              {/* Explore panel — top-right, overlapping screenshot */}
              <div className="absolute top-0 -right-20 z-30">
                <ExplorePanel active={active} onSelect={handleSelect} />
              </div>

            </div>
          </div>

          {/* ══ MOBILE ═══════════════════════════════════════════════ */}
          <div className="lg:hidden flex flex-col gap-4">

            <div
              className="w-full rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                minHeight: "340px",
                background: "#f5f5ff",
              }}
            >
              <img
                key={`mob-${mobIndex}`}
                src={mobFeature.screenshotImageMobile || mobFeature.screenshotImage}
                alt={mobFeature.label}
                className="img-anim w-full object-cover object-top block"
                style={{ minHeight: "340px" }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />

              <div className="absolute inset-0 -z-10">
                <SkeletonScreen />
              </div>

              {/* Left arrow */}
              <button
                onClick={mobPrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md active:scale-90 transition-transform"
              >
                <ChevronLeft size={18} className="text-gray-700" />
              </button>

              {/* Right arrow */}
              <button
                onClick={mobNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md active:scale-90 transition-transform"
              >
                <ChevronRight size={18} className="text-gray-700" />
              </button>

              {/* Agent badge */}
              <div className="absolute bottom-10 left-3 z-20">
                <AgentBadge feature={mobFeature} animKey={mobIndex} />
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 items-center">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobIndex(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === mobIndex ? "20px" : "6px",
                      height: "6px",
                      background: i === mobIndex ? "#6161ff" : "rgba(150,150,200,0.5)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-[12px] font-bold uppercase tracking-widest" style={{ color: "#6161ff" }}>
                {mobFeature.label.replace("\n", " ")}
              </p>
            </div>

            <button
              className="w- rounded-full py-3.5 text-[14px] font-semibold text-white flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(90deg,#5b5ef4,#4a4de8)",
                boxShadow: "0 4px 18px rgba(97,97,255,0.35)",
              }}
            >
              Get Started <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}