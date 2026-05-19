import { useState } from "react";

const steps = [
  {
    number: "01",
    tag: "Personal Trainers",
    title: "Spend less time on admin.\nMore time coaching.",
    body: "Your time is a high-value asset. When it's absorbed by manual tasks and disconnected tools, delivery and growth both suffer. SmartCoach360 standardises your operations so you can focus on coaching outcomes—and increase capacity without compromising quality.",
    color: "#9747FF",
    challenges: [
      "Tracking client progress across spreadsheets and handwritten notes",
      "Chasing payments and manually tracking session packs",
      "Sending plans through WhatsApp or email every week",
      "Clients drifting away from inconsistent follow-ups",
      "Hitting a client ceiling because operations can't scale",
    ],
    features: [
      { label: "Custom Programs", desc: "Build your workout library once, assign personalised programs instantly via the app." },
      { label: "Nutrition & Macro Tracking", desc: "Set personalised targets, track adherence, and monitor activity from one dashboard." },
      { label: "Client Messaging", desc: "Automated check-ins, in-app messaging, and video calls keep clients engaged." },
      { label: "Payment Management", desc: "Session packs, online payments, discounts—configured once, running automatically." },
      { label: "Progress Dashboard", desc: "See compliance, progress, and assessments without digging through messages." },
      { label: "Mobile App", desc: "Full platform access on iOS and Android. Manage everything from your phone." },
    ],
  },
  {
    number: "02",
    tag: "Gym Owners & Studios",
    title: "Run your entire gym\nfrom one platform.",
    body: "Running a gym requires visibility across coaches, clients, classes, memberships, and revenue. SmartCoach360 provides a single operational view—so you can standardise delivery, reduce overhead, and make decisions with real-time insight.",
    color: "#9747FF",
    challenges: [
      "Coordinating multiple coaches and client assignments manually",
      "Inconsistent client experiences across different coaches",
      "Class scheduling scattered across different systems",
      "Slow, error-prone billing and membership management",
      "No easy way to track revenue and performance across your business",
    ],
    features: [
      { label: "Multi-Coach Management", desc: "Assign coaches, set capacity thresholds, track performance across every location." },
      { label: "Consistent Delivery", desc: "Master programmes every coach follows—same high-quality experience every time." },
      { label: "Classes & Appointments", desc: "Schedule sessions, sync calendars, avoid double-bookings with ease." },
      { label: "Business Dashboards", desc: "Revenue, client retention, compliance rates, and coach performance in real time." },
      { label: "Automated Billing", desc: "Recurring memberships, discounts, and pauses—managed automatically." },
      { label: "Role & Access Control", desc: "Give each team member exactly the access they need—and nothing more." },
    ],
  },
  {
    number: "03",
    tag: "Nutrition Coaches",
    title: "Deliver personalised\nnutrition at scale.",
    body: "Nutrition coaching is deeply personal work. Getting it right requires consistent monitoring, personalised planning, and ongoing client accountability. SmartCoach360 gives you the tools to do that for more clients than you ever thought possible.",
    color: "#9747FF",
    challenges: [
      "Manually creating individual meal plans one by one",
      "No reliable way to know if clients follow their plan",
      "Tracking health data across multiple apps and spreadsheets",
      "Clients going quiet between check-in calls",
      "Struggling to grow without compromising coaching quality",
    ],
    features: [
      { label: "Personalised Meal Plans", desc: "Create a library of plans, then assign customised programmes quickly and easily." },
      { label: "Macro Goal Tracking", desc: "Set specific targets and track daily intake in real time—no waiting for weekly check-ins." },
      { label: "Compliance Monitoring", desc: "See which clients are hitting targets and which need a nudge, across your whole roster." },
      { label: "Female Health Tracker", desc: "Track hormonal cycles alongside nutrition data for holistic, personalised coaching." },
      { label: "Health Integration", desc: "Sync from Apple Health, Google Fit, and Health Connect automatically." },
      { label: "Automated Check-ins", desc: "Daily or weekly accountability messages keep clients supported between sessions." },
    ],
  },
  {
    number: "04",
    tag: "Large Organisations",
    title: "Enterprise tools built\nfor fitness at scale.",
    body: "When you're running multiple locations, managing large coaching teams, and serving thousands of clients, disconnected systems get expensive fast. SmartCoach360 provides enterprise-grade infrastructure built for the fitness industry.",
    color: "#9747FF",
    challenges: [
      "No single system connecting all branches, teams, and coaching data",
      "Service quality varies depending on location or coach",
      "Manual lead allocation creating slow response times",
      "Difficulty controlling data access across a large team",
      "No bird's-eye view of organisational performance",
    ],
    features: [
      { label: "Multi-Branch Management", desc: "Manage every branch from one central dashboard with consistent workflows." },
      { label: "Auto Lead Allocation", desc: "New enquiries assigned to the right coach automatically—no bottlenecks." },
      { label: "Granular Permissions", desc: "Define precise roles for every team member with granular access controls." },
      { label: "Org-wide Dashboards", desc: "Real-time view of client stats, coach performance, and revenue across branches." },
      { label: "SSO & Security", desc: "Single Sign-On keeps team access secure and centralised across your organisation." },
      { label: "Bulk Onboarding", desc: "Onboard hundreds of clients and coaches at once without manual data entry." },
    ],
  },
];

const comparisonFeatures = [
  { label: "Custom Programs",           pt: true,  gym: true,  nc: true,  ent: true  },
  { label: "Nutrition Tracking",        pt: true,  gym: true,  nc: true,  ent: true  },
  { label: "Client Messaging",          pt: true,  gym: true,  nc: true,  ent: true  },
  { label: "Payment Processing",        pt: true,  gym: true,  nc: true,  ent: true  },
  { label: "Team Management",           pt: false, gym: true,  nc: false, ent: true  },
  { label: "Multi-branch Support",      pt: false, gym: true,  nc: false, ent: true  },
  { label: "Auto Lead Allocation",      pt: false, gym: true,  nc: false, ent: true  },
  { label: "Role & Access Control",     pt: false, gym: true,  nc: false, ent: true  },
  { label: "SSO & Enterprise Security", pt: false, gym: false, nc: false, ent: true  },
  { label: "Bulk Upload",               pt: false, gym: true,  nc: false, ent: true  },
  { label: "Dedicated Success Manager", pt: false, gym: true,  nc: false, ent: true  },
];

const plans = [
  { key: "pt",  label: "Personal Trainer", color: "#9747FF" },
  { key: "gym", label: "Gym / Studio",     color: "#9747FF" },
  { key: "nc",  label: "Nutrition Coach",  color: "#9747FF" },
  { key: "ent", label: "Large Org",        color: "#9747FF" },
];

const CheckIcon = ({ active, color }) =>
  active ? (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: "block", margin: "0 auto" }}>
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.1" />
      <path d="M6 10l2.5 2.5 5.5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: "block", margin: "0 auto" }}>
      <circle cx="10" cy="10" r="9.5" stroke="#E5E7EB" strokeWidth="1" />
    </svg>
  );

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <section
      style={{
        background: "#FAFAFA",
      }}
    >
      {/* ── Hero Header ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "240px 48px 100px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9747FF",
            marginBottom: 24,
          }}
        >
          How it works
        </span>
        <h1
          style={{
            fontSize: "clamp(48px, 6vw, 80px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#0A0A0A",
            margin: "0 0 28px",
          }}
        >
          Built for every kind of
          <br />
          fitness professional.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "#6B7280",
            maxWidth: 540,
            margin: "0 auto 48px",
          }}
        >
          Whether you coach one-on-one, run a busy gym, or manage a national fitness
          organisation SmartCoach360 fits the way you operate.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{
              background: "#0A0A0A",
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "16px 32px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            Book a Demo →
          </button>
          <button
            style={{
              background: "transparent",
              color: "#0A0A0A",
              border: "1.5px solid #E5E7EB",
              borderRadius: 100,
              padding: "16px 32px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            See Pricing
          </button>
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <div style={{ borderTop: "1px solid #EBEBEB", borderBottom: "1px solid #EBEBEB", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            gap: 0,
            overflowX: "auto",
          }}
        >
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeStep === i ? `2.5px solid ${s.color}` : "2.5px solid transparent",
                padding: "22px 32px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: activeStep === i ? 700 : 500,
                color: activeStep === i ? s.color : "#9CA3AF",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  background: activeStep === i ? s.color : "#F3F4F6",
                  color: activeStep === i ? "#fff" : "#9CA3AF",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Step Detail ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: step.color,
                display: "block",
                marginBottom: 16,
              }}
            >
              {step.tag}
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.12,
                color: "#0A0A0A",
                margin: "0 0 24px",
                whiteSpace: "pre-line",
              }}
            >
              {step.title}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#6B7280", margin: "0 0 40px" }}>
              {step.body}
            </p>

            {/* Challenges */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#D1D5DB",
                  margin: "0 0 16px",
                }}
              >
                Pain points we solve
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {step.challenges.map((c, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: 3 }}
                    >
                      <circle cx="8" cy="8" r="7.5" stroke={step.color} strokeOpacity="0.3" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke={step.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ fontSize: 14, lineHeight: 1.6, color: "#374151" }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              style={{
                marginTop: 40,
                background: step.color,
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "15px 28px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "-0.01em",
              }}
            >
              Get Started →
            </button>
          </div>

          {/* Right — features grid */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#D1D5DB",
                margin: "0 0 20px",
              }}
            >
              What you get
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {step.features.map((feat, j) => (
                <div
                  key={j}
                  style={{
                    background: "#fff",
                    border: "1px solid #F0F0F0",
                    borderRadius: 16,
                    padding: "20px 20px 22px",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: step.color + "14",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke={step.color}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0A0A0A", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                    {feat.label}
                  </p>
                  <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#9CA3AF", margin: 0 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step dots */}
        <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                width: activeStep === i ? 28 : 8,
                height: 8,
                borderRadius: 100,
                background: activeStep === i ? s.color : "#E5E7EB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: 1, background: "#EBEBEB" }} />
      </div>

      {/* ── Comparison Table ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px 120px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9747FF",
              display: "block",
              marginBottom: 16,
            }}
          >
            Compare plans
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#0A0A0A",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            Which plan is right for you?
          </h2>
          <p style={{ fontSize: 16, color: "#9CA3AF", margin: 0 }}>
            All plans include core features. Larger plans unlock team and scale tools.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #EBEBEB",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr repeat(4, 1fr)",
              borderBottom: "1px solid #F3F4F6",
              background: "#FAFAFA",
            }}
          >
            <div style={{ padding: "24px 28px" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>Feature</span>
            </div>
            {plans.map((p) => (
              <div key={p.key} style={{ padding: "24px 16px", textAlign: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "6px 14px",
                    borderRadius: 100,
                    background: p.color + "14",
                    color: p.color,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {comparisonFeatures.map((feat, i) => {
            const vals = [feat.pt, feat.gym, feat.nc, feat.ent];
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr repeat(4, 1fr)",
                  borderBottom: i < comparisonFeatures.length - 1 ? "1px solid #F9FAFB" : "none",
                  background: i % 2 === 0 ? "#fff" : "#FDFDFD",
                  alignItems: "center",
                }}
              >
                <div style={{ padding: "16px 28px" }}>
                  <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{feat.label}</span>
                </div>
                {vals.map((val, j) => (
                  <div key={j} style={{ padding: "16px", display: "flex", justifyContent: "center" }}>
                    <CheckIcon active={val} color={plans[j].color} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* CTA below table */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 15, color: "#9CA3AF", marginBottom: 24 }}>
            Not sure which plan fits your business?
          </p>
          <button
            style={{
              background: "#0A0A0A",
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "16px 36px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            Talk to Sales →
          </button>
        </div>
      </div>
    </section>
  );
}