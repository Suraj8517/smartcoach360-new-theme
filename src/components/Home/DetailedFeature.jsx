import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Salad,
  Bolt,
  MessageSquare,
  CreditCard,
  BarChart,
  Users,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

// ── Avatar imports ────────────────────────────────────────────────────────────
import avatar1 from "../../assets/crm/avatar/avatar1.png";
import avatar2 from "../../assets/crm/avatar/avatar2.png";
import avatar3 from "../../assets/crm/avatar/avatar3.png";
import avatar4 from "../../assets/crm/avatar/avatar4.png";
import avatar5 from "../../assets/crm/avatar/avatar5.png";
import avatar6 from "../../assets/crm/avatar/avatar6.png";

import coaching   from "../../assets/crm/exercise-library.png";
import nutri      from "../../assets/crm/nutrition.png";
import workflow   from "../../assets/crm/workflow.png";
import engage     from "../../assets/crm/chat.png";
import payments   from "../../assets/crm/payments.png";
import dashboards from "../../assets/crm/dashboard.webp";
import teamcrm    from "../../assets/crm/team.png";
import crmapp     from "../../assets/crm/app.png";
import crmsecurity from "../../assets/crm/security.png";

const IMAGES = {
  coaching, nutri, workflow, engage, payments, dashboards, teamcrm, crmapp, crmsecurity,
};

// ── Features data ─────────────────────────────────────────────────────────────
const features = [
  {
    num: "001",
    icon: <ClipboardList size={18} />,
    img: IMAGES.coaching,
    title: "Program",
    desc: "Build your master library once. Assign fully customised plans to individual clients in seconds. Clients get workouts on the app — no PDFs, no confusion.",
    tags: ["Master Programs", "Video Library", "Auto Notifications", "Custom Exercises"],
  },
  {
    num: "002",
    icon: <Salad size={18} />,
    img: IMAGES.nutri,
    title: "Nutrition",
    desc: "Create personalised meal plans, set macro targets, track daily compliance. Includes a dedicated female health and hormonal cycle tracker.",
    tags: ["Meal Tracking", "Macro Goals", "Compliance Monitor", "Female Health"],
  },
  {
    num: "003",
    icon: <Bolt size={18} />,
    img: IMAGES.workflow,
    title: "Automation",
    desc: "Lead allocation, client onboarding, payment flows, and communication sequences — completely automated and running in the background.",
    tags: ["Lead Allocation", "Auto Onboarding", "Payment Flows", "Message Sequences"],
  },
  {
    num: "004",
    icon: <MessageSquare size={18} />,
    img: IMAGES.engage,
    title: "Clients",
    desc: "Automated check-ins, in-app messaging, video calls, group challenges, and digital high-fives. Keep every client engaged between sessions.",
    tags: ["In-App Messaging", "Video Calls", "Group Challenges", "Auto Check-ins"],
  },
  {
    num: "005",
    icon: <CreditCard size={18} />,
    img: IMAGES.payments,
    title: "Payments",
    desc: "No more chasing. Accept online payments, set up recurring session packs, configure discounts, and handle partial payments — all built in.",
    tags: ["Online Payments", "Session Packs", "Discount Codes", "Instalments"],
  },
  {
    num: "006",
    icon: <BarChart size={18} />,
    img: IMAGES.dashboards,
    title: "Dashboards",
    desc: "Real-time view of client compliance, progress, and business health. Custom surveys, pre-assessment forms, performance dashboards.",
    tags: ["Live Reports", "Business Insights", "Custom Surveys", "Health Intake"],
  },
  {
    num: "007",
    icon: <Users size={18} />,
    img: IMAGES.teamcrm,
    title: "Team",
    desc: "Whether you are a solo coach or managing a multi-branch fitness organisation, scale effortlessly. Control teams, assign roles, and oversee operations from one central dashboard.",
    tags: ["Team & Branch Management", "Role-Based Access", "Coach Allocation Limits", "Bulk Upload Tools"],
  },
  {
    num: "008",
    icon: <Smartphone size={18} />,
    img: IMAGES.crmapp,
    title: "App",
    desc: "Run your entire coaching business from your pocket. Coaches and clients get a seamless mobile experience with real-time updates and integrated health tracking.",
    tags: ["iOS & Android Apps", "Client Self-Service", "Push Notifications", "Health Data Sync"],
  },
  {
    num: "009",
    icon: <ShieldCheck size={18} />,
    img: IMAGES.crmsecurity,
    title: "Security",
    desc: "Enterprise-grade security built into every plan. Protect sensitive client data with advanced authentication, secure payments, and compliance tools.",
    tags: ["SSO Support", "Access Control", "PCI-DSS Payments", "GDPR Tools"],
  },
];

// ── Banner avatars ────────────────────────────────────────────────────────────
const bannerAvatars = [
  { id: 1, url: avatar1, bg: "#b6e3f4" },
  { id: 2, url: avatar2, bg: "#c0aede" },
  { id: 3, url: avatar3, bg: "#ffdfbf" },
  { id: 4, url: avatar4, bg: "#d1d4f9" },
  { id: 5, url: avatar5, bg: "#ffd5dc" },
  { id: 6, url: avatar6, bg: "#c0e8c0" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function BannerAvatar({ av, size }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-2xl overflow-hidden flex-shrink-0 border border-white/10"
      style={{ width: size, height: size, minWidth: size, background: av.bg }}
    >
      <img
        src={av.url}
        alt=""
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </span>
  );
}

function Segment({ avs }) {
  return (
    <span className="inline-flex items-center flex-shrink-0" style={{ paddingRight: 64 }}>
      <span className="inline-flex items-end gap-2 flex-shrink-0 px-8">
        <BannerAvatar av={avs[0]} size={54} />
        <BannerAvatar av={avs[1]} size={72} />
        <BannerAvatar av={avs[2]} size={58} />
      </span>
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
        <span className="text-purple-500 font-bold">#1</span> Platform for Coaches
      </span>
    </span>
  );
}

// Dimmed peek card shown on left / right edges
function GhostCard({ feature, side }) {
  const translateX = side === "left" ? "-86%" : "86%";
  return (
    <div
      className="absolute top-0 bottom-0 w-[300px] rounded-2xl overflow-hidden pointer-events-none select-none flex flex-col"
      style={{
        [side]: 0,
        transform: `translateX(${translateX})`,
        background: "#111",
        border: "1px solid rgba(255,255,255,0.06)",
        opacity: 0.3,
        zIndex: 0,
      }}
    >
      {/* mini header */}
      <div
        className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
        style={{ background: "#161616", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="w-8 h-8 rounded-lg bg-violet-600/30 flex items-center justify-center text-violet-400 flex-shrink-0">
          {feature.icon}
        </span>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">{feature.title}</p>
          <p className="text-white/40 text-[10px]">{feature.num}</p>
        </div>
      </div>
      {/* image */}
      <div className="flex-1 overflow-hidden">
        <img src={feature.img} alt="" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function DetailedFeatures() {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);
  const curX = useRef(0);
  const tgtX = useRef(0);
  const raf  = useRef(null);

  const [x, setX]           = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const feature  = features[activeIdx];
  const prevFeat = features[(activeIdx - 1 + features.length) % features.length];
  const nextFeat = features[(activeIdx + 1) % features.length];
  const seg2     = [...bannerAvatars].reverse();

  // rAF lerp
  useEffect(() => {
    const tick = () => {
      curX.current += (tgtX.current - curX.current) * 0.09;
      setX(curX.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // scroll → horizontal offset
  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const vh   = window.innerHeight;
      const totalTravel = vh + wrapperRef.current.offsetHeight;
      const progress    = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel));
      const loopW = trackRef.current.scrollWidth / 3;
      tgtX.current = progress * loopW;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const loopW = trackRef.current ? trackRef.current.scrollWidth / 3 : 1;
  const safeX = ((x % loopW) + loopW) % loopW;

  return (
    <div className="bg-black w-full min-h-screen">

      {/* ═══ SCROLL-DRIVEN BANNER ═══ */}
      <div ref={wrapperRef} className="relative" style={{ height: 580 }}>
        <div className="bg-black overflow-hidden" style={{ height: 180 }}>
          <div className="absolute inset-y-0 left-0 z-20 pointer-events-none"
            style={{ width: 120, background: "linear-gradient(to right, #000 35%, transparent)" }} />
          <div className="absolute inset-y-0 right-0 z-20 pointer-events-none"
            style={{ width: 120, background: "linear-gradient(to left, #000 35%, transparent)" }} />
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center"
              style={{ transform: `translateX(${-safeX}px)`, willChange: "transform", whiteSpace: "nowrap" }}
            >
              <Segment avs={bannerAvatars} />
              <Segment avs={seg2} />
              <Segment avs={bannerAvatars} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ FEATURES SECTION ═══ */}
      <div className="flex flex-col items-center px-6 pb-24 ">

        {/* eyebrow */}
        <p className="text-white/40 text-[13px] font-medium mb-5" style={{ letterSpacing: "0.12em" }}>
          Platform Features
        </p>

        {/* headline */}
        <h2
          className="text-white font-bold leading-[1.15] mb-10 text-center"
          style={{ fontSize: "clamp(26px, 3.8vw, 52px)", letterSpacing: "-0.02em" }}
        >
          Everything You Need to Coach, <br />
          Grow &amp; Automate
        </h2>

        {/* ── Pills — one per feature ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {features.map((f, i) => (
            <button
              key={f.num}
              onClick={() => setActiveIdx(i)}
              className={[
                "rounded-full px-4 py-[7px] text-[12px] font-medium transition-all duration-200 border outline-none cursor-pointer flex items-center gap-1.5",
                i === activeIdx
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "bg-[#1a1a1a] border-white/20 text-white/60 hover:border-white/40 hover:text-white/90",
              ].join(" ")}
            >
              {f.title}
            </button>
          ))}
        </div>

        {/* ── Subtitle + nav arrows ── */}
        <div className="w-full max-w-5xl flex items-center justify-between mb-6 px-1">
            <div className="max-w-3xl">
                  <p className="text-white/70 text-lg font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {feature.desc}.
          </p>
            </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => setActiveIdx((activeIdx - 1 + features.length) % features.length)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all text-base"
            >
              ←
            </button>
            <button
              onClick={() => setActiveIdx((activeIdx + 1) % features.length)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all text-base"
            >
              →
            </button>
          </div>
        </div>

        {/* ── Card carousel ── */}
        <div className="w-full max-w-5xl relative" style={{ minHeight: 560 }}>

       

          {/* ── MAIN CARD ── */}
          <div
            key={activeIdx}
            className="relative w-full rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "#111111",
              minHeight: 560,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 32px 80px rgba(0,0,0,0.7)",
              zIndex: 1,
            }}
          >
            {/* Card header */}
            <div
              className="flex items-center justify-between px-6 py-5 flex-shrink-0"
              style={{ background: "#161616", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-4">
                {/* icon badge */}
              
                <div>
                  <p className="text-white font-semibold text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {feature.title}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-all group">
                Book a Demo  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
 →</span>
              </button>
            </div>

            {/* Card body — split: left text / right image */}
            <div className="flex flex-1 min-h-0" style={{ minHeight: 460 }}>

              {/* Left — description + tags 
              <div className="flex flex-col justify-center px-8 py-10 gap-6" style={{ width: "38%", flexShrink: 0 }}>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(139,92,246,0.12)",
                        border: "1px solid rgba(139,92,246,0.25)",
                        color: "#a78bfa",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
*/}
              {/* Right — single image filling the panel */}
              <div className="flex-1 overflow-hidden p-2" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                <img className="w-full h-full rounded-2xl object-cover "
                  src={feature.img}
                  alt={feature.title}
                  style={{
                    objectPosition: "top left",
                    display: "block",
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}