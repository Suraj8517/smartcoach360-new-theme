import { Link } from "react-router-dom";

export default function SmartCoachFooter() {
  const contactItems = [
    {
      label: "Email",
      value: "sales@smartcoach360.ai",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+1 800 000 0000",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6 6l.52-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" />
        </svg>
      ),
    },
    {
      label: "Address",
      value: "No 9/14, Bharathi Street,Vellakinar, Coimbatore,Tamil Nadu, 641029",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer
      style={{
        background: "#ffffff",
        color: "#1a1a1a",
      }}
      className="w-full"
    >
      {/* Top section */}
      <div className="px-5 sm:px-10 pt-10 pb-8">

        {/* Contact items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          {contactItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              {/* Icon bubble */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "#f3f0ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#7c5cfc",
                }}
              >
                {item.icon}
              </div>

              <div style={{ minWidth: 0 }}>
                <p style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  margin: "0 0 4px",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: 13.5,
                  color: "#333",
                  lineHeight: 1.55,
                  wordBreak: "break-word",
                  margin: 0,
                }}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big brand wordmark */}
      <div style={{ overflow: "hidden" }}>
        <p
          style={{
            fontWeight: 700,
            letterSpacing: "0.01em",
            lineHeight: 0.88,
            textAlign: "center",
            whiteSpace: "nowrap",
            userSelect: "none",
            fontSize: "clamp(20px, 9vw, 160px)",
            color: "transparent",
            WebkitTextStroke: "1px #e0daf8",
            margin: 0,
            padding: "12px 0 40px",
            textTransform: "uppercase",
          }}
        >
          SmartCoach360
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{ padding: "14px 20px 20px" }}
        className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2 md:mb-22"
      >
        <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>
          © 2025–26 SmartCoach360. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {footerLinks.map((link) => (
            <Link to={link.href}
              key={link.label}
              style={{
                fontSize: 12,
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#7c5cfc"}
              onMouseLeave={e => e.target.style.color = "#999"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}