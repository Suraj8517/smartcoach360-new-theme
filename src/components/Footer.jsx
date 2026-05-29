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
      label: "LinkedIn",
      value: null,
      href: "https://www.linkedin.com/company/smartcoach360/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: null,
      href: "https://instagram.com/smartcoach360",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Address",
      value: "No 9/14, Bharathi Street, Vellakinar, Coimbatore, Tamil Nadu, 641029",
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
      style={{ background: "#ffffff", color: "#1a1a1a" }}
      className="w-full border-t border-gray-200"
    >
      {/* Top section */}
      <div className="px-5 sm:px-10 pt-10 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {contactItems.map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              {/* Icon bubble */}
              <a
                href={item.href ?? undefined}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
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
                  textDecoration: "none",
                  cursor: item.href ? "pointer" : "default",
                }}
              >
                {item.icon}
              </a>

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
                {item.value && !item.href && (
                  <p style={{
                    fontSize: 13.5,
                    color: "#333",
                    lineHeight: 1.55,
                    wordBreak: "break-word",
                    margin: 0,
                  }}>
                    {item.value}
                  </p>
                )}
                {item.value && item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13.5,
                      color: "#333",
                      lineHeight: 1.55,
                      wordBreak: "break-word",
                      margin: 0,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.target.style.color = "#7c5cfc"}
                    onMouseLeave={e => e.target.style.color = "#333"}
                  >
                    {item.value}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

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
            <Link
              to={link.href}
              key={link.label}
              style={{ fontSize: 12, color: "#999", textDecoration: "none", transition: "color 0.2s" }}
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