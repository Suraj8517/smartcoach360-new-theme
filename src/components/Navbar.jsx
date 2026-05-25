import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/smartcoach360.svg";

// ── Route map ──────────────────────────────────────────────────────────────
const NAV_ROUTES = {
  Integrations: "/integrations",
  Solutions:    "/solutions",
  "About Us":   "/about-us",
  Resources:    "/resources",
  Pricing:      "/pricing",
  Compare:      "/compare",
  "Contact Us": "/contact-us",
};

const MOBILE_ROUTES = {
  "About Us":        "/about-us",
  AI:                "/ai",
  Solutions:         "/solutions",
  Resources:         "/resources",
  Integrations:      "/integrations",
  Pricing:           "/pricing",
  "Log in":          "/login",
  "Blogs":           "/blogs",
  "Success Stories": "/success-stories",
};

const url = import.meta.env.VITE_CALENDLY_LINK;

// ── Resources Submenu ─────────────────────────────────────────────────────
const RESOURCES_SUBMENU = [
  {
    label: "Blogs",
    route: "/blogs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="12" y2="15" />
      </svg>
    ),
    description: "Tips, guides & industry insights",
  },
  {
    label: "Success Stories",
    route: "/success-stories",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    description: "Real results from real coaches",
  },
];

// ── Desktop bottom floating pill nav (lg+) ────────────────────────────────
const DesktopFloatingNav = ({ navigate, currentPath }) => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);
  const timeoutRef = useRef(null);

  const centerLinks = [
    { label: "Integrations", route: "/integrations" },
    { label: "Solutions",    route: "/solutions"    },
    { label: "About Us",     route: "/about-us"     },
    { label: "Resources",    route: null, hasSubmenu: true },
    { label: "Pricing",      route: "/pricing"      },
    { label: "Compare",      route: "/comparison"      },
  ];

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setResourcesOpen(false), 120);
  };

  const isResourcesActive =
    currentPath === "/resources" ||
    currentPath === "/blogs" ||
    currentPath === "/success-stories";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 14,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 4,
        borderRadius: 999,
        padding: "5px 5px 5px 5px",
        fontFamily: "'Poppins', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        background: "#ffffff",
        borderRadius: 999,
        border: "1px solid #e8e8e8",
        padding: "5px 5px 5px 5px",
        fontFamily: "'Poppins', sans-serif",
        whiteSpace: "nowrap",
      }}>

        {/* Logo pill */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px 6px 8px",
            borderRadius: 999,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
          aria-label="Home"
        >
          <div style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#f3f0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <img src={logo} alt="Logo" style={{ width: 28, height: 28, objectFit: "contain" }} />
          </div>
        </button>

        {/* Center nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 4px" }}>
          {centerLinks.map(({ label, route, hasSubmenu }) => {
            const isActive = route ? currentPath === route : isResourcesActive;

            if (hasSubmenu) {
              return (
                <div
                  key={label}
                  ref={resourcesRef}
                  style={{ position: "relative" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    style={{
                      padding: "10px 13px",
                      borderRadius: 999,
                      fontSize: 16,
                      fontWeight: 400,
                      color: isActive ? "#6E0ACE" : "#323338",
                      background: isActive ? "#EFE0FE" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "background 0.15s, color 0.15s",
                      fontFamily: "'Poppins', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = "#6E0ACE"; e.currentTarget.style.background = "#f9f5ff"; } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = "#323338"; e.currentTarget.style.background = "transparent"; } }}
                  >
                    {label}
                    {/* Chevron */}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transition: "transform 0.2s",
                        transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isActive ? "#6E0ACE" : "#888",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Submenu — floats above the nav pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#ffffff",
                      border: "1px solid #ede9fe",
                      borderRadius: 16,
                      boxShadow: "0 8px 32px rgba(110,10,206,0.10), 0 2px 8px rgba(0,0,0,0.07)",
                      padding: "8px",
                      minWidth: 220,
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      opacity: resourcesOpen ? 1 : 0,
                      pointerEvents: resourcesOpen ? "auto" : "none",
                      transform: resourcesOpen
                        ? "translateX(-50%) translateY(0)"
                        : "translateX(-50%) translateY(6px)",
                      transition: "opacity 0.18s ease, transform 0.18s ease",
                      zIndex: 10000,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {/* Little arrow pointing down */}
                    <div style={{
                      position: "absolute",
                      bottom: -7,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 14,
                      height: 7,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        width: 10,
                        height: 10,
                        background: "#fff",
                        border: "1px solid #ede9fe",
                        transform: "rotate(45deg)",
                        margin: "0 auto",
                        marginTop: -6,
                      }} />
                    </div>

                    {RESOURCES_SUBMENU.map((item) => {
                      const isSubActive = currentPath === item.route;
                      return (
                        <button
                          key={item.label}
                          onClick={() => { navigate(item.route); setResourcesOpen(false); }}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            padding: "10px 12px",
                            borderRadius: 10,
                            background: isSubActive ? "#EFE0FE" : "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "background 0.12s",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          onMouseEnter={e => { if (!isSubActive) e.currentTarget.style.background = "#f9f5ff"; }}
                          onMouseLeave={e => { if (!isSubActive) e.currentTarget.style.background = "transparent"; }}
                        >
                          <span style={{
                            color: isSubActive ? "#6E0ACE" : "#888",
                            marginTop: 1,
                            flexShrink: 0,
                          }}>
                            {item.icon}
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <span style={{
                              fontSize: 14,
                              fontWeight: 500,
                              color: isSubActive ? "#6E0ACE" : "#323338",
                              lineHeight: 1.3,
                            }}>
                              {item.label}
                            </span>
                            <span style={{
                              fontSize: 12,
                              color: "#9ca3af",
                              fontWeight: 400,
                              lineHeight: 1.4,
                            }}>
                              {item.description}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={label}
                onClick={() => navigate(route)}
                style={{
                  padding: "10px 13px",
                  borderRadius: 999,
                  fontSize: 16,
                  fontWeight: 400,
                  color: isActive ? "#6E0ACE" : "#323338",
                  background: isActive ? "#EFE0FE" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.15s, color 0.15s",
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = "#6E0ACE"; e.currentTarget.style.background = "#f9f5ff"; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = "#323338"; e.currentTarget.style.background = "transparent"; } }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Us button */}
      <div className="bg-white border border-gray-100 rounded-full flex items-center gap-2 px-2 py-2">
        <button
          onClick={() => navigate("/contact-us")}
          style={{
            padding: "10px 13px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 500,
            color: "#6E0ACE",
            background: "#ffffff",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "'Poppins', sans-serif",
            transition: "background 0.15s",
            marginLeft: 2,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#EFE0FE"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; }}
        >
          Contact Us
        </button>
      </div>

      {/* Book a Demo button */}
      <div className="bg-[#6E0ACE] rounded-full flex items-center gap-2 px-2 py-2">
        <button
          onClick={() => window.open(url, "_blank")}
          style={{
            padding: "10px 13px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 500,
            color: "#ffffff",
            background: "#6E0ACE",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "'Poppins', sans-serif",
            transition: "background 0.15s",
            marginRight: 2,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#9631F5"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#6E0ACE"; }}
        >
          Book a Demo
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ── Mobile Menu ────────────────────────────────────────────────────────────
const MobileMenu = ({ open, navigate, onClose, currentPath }) => {
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const mobileItems = [
    { label: "About Us",     chevron: true  },
    { label: "Solutions",    chevron: false },
    { label: "Resources",    chevron: true, hasSubmenu: true },
    { label: "Integrations", chevron: false },
    { label: "Pricing",      chevron: false },
    { label: "Log in",       chevron: false },
  ];

  const handleNav = (route) => {
    navigate(route);
    onClose();
  };

  return (
    <div
      className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 transition-all duration-300 ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="px-5 py-4 flex flex-col divide-y divide-gray-100">
        {mobileItems.map(({ label, chevron, hasSubmenu }) => {
          const route = MOBILE_ROUTES[label] ?? `/${label.toLowerCase().replace(/\s+/g, "-")}`;
          const isActive = currentPath === route ||
            (label === "Resources" && (currentPath === "/blogs" || currentPath === "/success-stories"));

          if (hasSubmenu) {
            return (
              <div key={label}>
                <button
                  onClick={() => setResourcesExpanded(!resourcesExpanded)}
                  className={`flex items-center justify-between w-full text-[15px] py-3 transition-colors ${
                    isActive ? "text-[#6E0ACE] font-medium" : "font-normal text-[#323338] hover:text-[#6161ff]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6E0ACE] flex-shrink-0" />}
                    {label}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesExpanded ? "rotate-180" : ""} ${isActive ? "text-[#6E0ACE]" : "text-gray-400"}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenu items */}
                <div className={`overflow-hidden transition-all duration-200 ${resourcesExpanded ? "max-h-40 pb-2" : "max-h-0"}`}>
                  {RESOURCES_SUBMENU.map((item) => {
                    const isSubActive = currentPath === item.route;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleNav(item.route)}
                        className={`flex items-center gap-3 w-full text-[14px] py-2.5 pl-5 pr-2 rounded-lg transition-colors ${
                          isSubActive
                            ? "text-[#6E0ACE] font-medium bg-[#f9f5ff]"
                            : "text-[#555] hover:text-[#6E0ACE] hover:bg-[#f9f5ff]"
                        }`}
                      >
                        <span className={isSubActive ? "text-[#6E0ACE]" : "text-gray-400"}>
                          {item.icon}
                        </span>
                        <span className="flex flex-col gap-0.5 text-left">
                          <span className="leading-none">{item.label}</span>
                          <span className="text-[12px] text-gray-400 font-normal">{item.description}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <button
              key={label}
              onClick={() => handleNav(route)}
              className={`flex items-center justify-between text-[15px] py-3 transition-colors ${
                isActive ? "text-[#6E0ACE] font-medium" : "font-normal text-[#323338] hover:text-[#6161ff]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6E0ACE] flex-shrink-0" />}
                {label}
              </span>
              {chevron && (
                <svg
                  className={`w-3.5 h-3.5 ${isActive ? "text-[#6E0ACE]" : "text-gray-400"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          );
        })}

        <div className="flex flex-col gap-3 pt-4 pb-2">
          <button
            onClick={() => handleNav("/contact-us")}
            className="w-full border border-[#6E0ACE] text-[#6E0ACE] rounded-full px-5 py-2.5 text-[15px] font-medium hover:bg-[#EFE0FE] transition-colors"
          >
            Contact Us
          </button>
          <button
            onClick={() => { window.open(url, "_blank"); onClose(); }}
            className="w-full rounded-full px-5 py-2.5 text-[15px] font-medium text-white bg-[#6E0ACE] hover:bg-[#9631F5] transition-colors"
          >
            Book a Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Navbar ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        .nav-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .nav-root { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* ── Mobile / Tablet top navbar (hidden on lg+) ── */}
      <nav
        className={`fixed left-0 right-0 nav-root z-[200] w-full bg-white xl:hidden ${
          scrolled ? "top-0 shadow-[0_2px_20px_rgba(0,0,0,0.12)]" : "top-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[64px]">

            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Logo" className="h-6 w-auto object-contain" />
              <div className="flex items-baseline">
                <span className="text-[20px] font-extrabold text-gray-900 tracking-[-0.5px] leading-none">
                  smartcoach360
                </span>
                <span className="text-[14px] font-normal text-gray-500 ml-[2px] leading-none">
                  .ai
                </span>
              </div>
            </div>

            {/* Hamburger */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-[22px] flex flex-col gap-[5px]">
                <span className={`block h-[2px] bg-[#323338] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-[2px] bg-[#323338] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-[2px] bg-[#323338] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <MobileMenu
          open={mobileOpen}
          navigate={navigate}
          onClose={() => setMobileOpen(false)}
          currentPath={currentPath}
        />
      </nav>

      {/* ── Desktop bottom floating pill nav (lg+ only) ── */}
      <div className="hidden xl:block">
        <DesktopFloatingNav navigate={navigate} currentPath={currentPath} />
      </div>
    </>
  );
}