import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/smartcoach360.svg";

const MOBILE_ROUTES = {
  "About Us": "/about-us",
  Compare: "/comparison",
  Solutions: "/solutions",
  Resources: "/resources",
  Integrations: "/integrations",
  Pricing: "/pricing",
  "Log in": "/login",
  Blogs: "/blogs",
  "Success Stories": "/success-stories",
  Security: "/security",
};

const url = import.meta.env.VITE_CALENDLY_LINK;

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
  {
    label: "Security",
    route: "/security",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    description: "Privacy, compliance & data protection",
  },
];

const CENTER_LINKS = [
  { label: "Integrations", route: "/integrations" },
  { label: "Solutions", route: "/solutions" },
  { label: "About Us", route: "/about-us" },
  { label: "Resources", route: null, hasSubmenu: true },
  { label: "Pricing", route: "/pricing" },
  { label: "Compare", route: "/comparison" },
];

// ─── Resources dropdown ────────────────────────────────────────────────────────

function ResourcesDropdown({ currentPath, navigate, dropdownPos = "bottom" }) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const isResourcesActive =
    currentPath === "/resources" ||
    currentPath === "/blogs" ||
    currentPath === "/success-stories" ||
    currentPath === "/security";

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setResourcesOpen(false), 120);
  };

  const isTop = dropdownPos === "top";

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-[5px] px-[13px] py-2.5 rounded-full text-[15px] font-normal border-none cursor-pointer whitespace-nowrap transition-colors duration-150 font-[Poppins]
          ${isResourcesActive
            ? "text-[#6E0ACE] bg-[#EFE0FE]"
            : "text-[#323338] bg-transparent hover:text-[#6E0ACE] hover:bg-[#f9f5ff]"
          }`}
      >
        Resources
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : "rotate-0"} ${isResourcesActive ? "text-[#6E0ACE]" : "text-[#888]"}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute z-[10000] left-1/2 -translate-x-1/2 bg-white border border-[#ede9fe] rounded-2xl shadow-[0_8px_32px_rgba(110,10,206,0.10),0_2px_8px_rgba(0,0,0,0.07)] p-2 min-w-[220px] flex flex-col gap-1 font-[Poppins] transition-all duration-[180ms] ease-in-out
          ${isTop ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+8px)]"}
          ${resourcesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : `opacity-0 ${isTop ? "translate-y-1.5" : "-translate-y-1.5"} pointer-events-none`
          }`}
      >
        {isTop ? (
          <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3.5 h-[7px] overflow-hidden">
            <div className="w-2.5 h-2.5 bg-white border border-[#ede9fe] rotate-45 mx-auto -mt-1.5" />
          </div>
        ) : (
          <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-[7px] overflow-hidden rotate-180">
            <div className="w-2.5 h-2.5 bg-white border border-[#ede9fe] rotate-45 mx-auto -mt-1.5" />
          </div>
        )}

        {RESOURCES_SUBMENU.map((item) => {
          const isSubActive = currentPath === item.route;
          return (
            <button
              key={item.label}
              onClick={() => { navigate(item.route); }}
              className={`flex items-start gap-2.5 px-3 py-2.5 rounded-[10px] border-none cursor-pointer text-left transition-colors duration-[120ms] font-[Poppins]
                ${isSubActive ? "bg-[#EFE0FE]" : "bg-transparent hover:bg-[#f9f5ff]"}`}
            >
              <span className={`mt-[1px] flex-shrink-0 ${isSubActive ? "text-[#6E0ACE]" : "text-[#888]"}`}>
                {item.icon}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className={`text-sm font-medium leading-[1.3] ${isSubActive ? "text-[#6E0ACE]" : "text-[#323338]"}`}>
                  {item.label}
                </span>
                <span className="text-xs text-[#9ca3af] font-normal leading-[1.4]">
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

// ─── Shared nav links ──────────────────────────────────────────────────────────

function NavLinks({ currentPath, navigate, dropdownPos = "bottom" }) {
  return (
    <>
      {CENTER_LINKS.map(({ label, route, hasSubmenu }) => {
        if (hasSubmenu) {
          return (
            <ResourcesDropdown
              key={label}
              currentPath={currentPath}
              navigate={navigate}
              dropdownPos={dropdownPos}
            />
          );
        }
        const isActive = currentPath === route;
        return (
          <button
            key={label}
            onClick={() => navigate(route)}
            className={`px-[13px] py-2.5 rounded-full text-[15px] font-normal border-none cursor-pointer whitespace-nowrap transition-colors duration-150 font-[Poppins]
              ${isActive
                ? "text-[#6E0ACE] bg-[#EFE0FE]"
                : "text-[#323338] bg-transparent hover:text-[#6E0ACE] hover:bg-[#f9f5ff]"
              }`}
          >
            {label}
          </button>
        );
      })}
    </>
  );
}

// ─── Desktop Full-width bar (top of page) ─────────────────────────────────────

const DesktopFullBar = ({ navigate, currentPath, visible }) => (
  <div
    className={`fixed top-0 left-0 right-0 z-[9999] w-full bg-white border-b border-[#e8e8e8] font-[Poppins]
      transition-all duration-300 ease-in-out
      ${visible
        ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none -translate-y-full"
      }`}
  >
    <div className="max-w-[1400px] mx-auto px-6 xl:px-10 2xl:px-16 flex items-center justify-between h-[68px]">

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-transparent border-none cursor-pointer flex-shrink-0"
        aria-label="Home"
      >
        <div className="w-[38px] h-[38px] rounded-full bg-[#f3f0ff] flex items-center justify-center flex-shrink-0">
          <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex items-baseline">
          <span className="text-[18px] font-extrabold text-gray-900 tracking-[-0.5px] leading-none">
            smartcoach360
          </span>
          <span className="text-[13px] font-normal text-gray-400 ml-[2px] leading-none">
            .ai
          </span>
        </div>
      </button>

      <div className="flex items-center gap-1">
        <NavLinks currentPath={currentPath} navigate={navigate} dropdownPos="bottom" />
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => navigate("/contact-us")}
          className="px-[13px] py-2.5 rounded-full text-[15px] font-medium text-[#6E0ACE] bg-white border border-[#e8d5fc] cursor-pointer whitespace-nowrap font-[Poppins] transition-colors duration-150 hover:bg-[#EFE0FE]"
        >
          Contact Us
        </button>
        <button
          onClick={() => window.open(url, "_blank")}
          className="flex items-center gap-1.5 px-[15px] py-2.5 rounded-full text-[15px] font-medium text-white bg-[#6E0ACE] border-none cursor-pointer whitespace-nowrap font-[Poppins] transition-colors duration-150 hover:bg-[#9631F5]"
        >
          Book a Demo
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </div>
  </div>
);

// ─── Desktop Floating pill (on scroll) ────────────────────────────────────────

const DesktopFloatingNav = ({ navigate, currentPath, visible }) => (
  <div
    className={`fixed z-[9999] flex items-center gap-1 font-[Poppins] whitespace-nowrap
      transition-all duration-300 ease-in-out
      ${visible
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
      }`}
    style={{
      top: "14px",
      left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "0px" : "-12px"})`,
    }}
  >
    <div className="flex items-center gap-1 bg-white rounded-full border border-[#e8e8e8] shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-[5px] whitespace-nowrap">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-transparent border-none cursor-pointer flex-shrink-0"
        aria-label="Home"
      >
        <div className="w-[42px] h-[42px] rounded-full bg-[#f3f0ff] flex items-center justify-center flex-shrink-0">
          <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
        </div>
      </button>

      <div className="flex items-center gap-1.5 px-1">
        <NavLinks currentPath={currentPath} navigate={navigate} dropdownPos="bottom" />
      </div>
    </div>

    <div className="bg-white border border-gray-100 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex items-center px-2 py-2">
      <button
        onClick={() => navigate("/contact-us")}
        className="px-[13px] py-2.5 rounded-full text-base font-medium text-[#6E0ACE] bg-white border-none cursor-pointer whitespace-nowrap flex-shrink-0 font-[Poppins] transition-colors duration-150 hover:bg-[#EFE0FE]"
      >
        Contact Us
      </button>
    </div>

    <div className="bg-[#6E0ACE] rounded-full shadow-[0_4px_24px_rgba(110,10,206,0.25)] flex items-center px-2 py-2">
      <button
        onClick={() => window.open(url, "_blank")}
        className="flex items-center gap-1.5 px-[13px] py-2.5 rounded-full text-base font-medium text-white bg-[#6E0ACE] border-none cursor-pointer whitespace-nowrap flex-shrink-0 font-[Poppins] transition-colors duration-150 hover:bg-[#9631F5]"
      >
        Book a Demo
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </div>
);

// ─── Mobile Menu (unchanged) ───────────────────────────────────────────────────

const MobileMenu = ({ open, navigate, onClose, currentPath }) => {
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const mobileItems = [
    { label: "About Us", chevron: false },
    { label: "Solutions", chevron: false },
    { label: "Resources", chevron: true, hasSubmenu: true },
    { label: "Integrations", chevron: false },
    { label: "Pricing", chevron: false },
    { label: "Comparison", chevron: false },
  ];

  const handleNav = (route) => {
    navigate(route);
    onClose();
  };

  return (
    <div
      className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 transition-all duration-300
        ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      <div className="px-5 py-4 flex flex-col divide-y divide-gray-100">
        {mobileItems.map(({ label, chevron, hasSubmenu }) => {
          const route =
            MOBILE_ROUTES[label] ??
            `/${label.toLowerCase().replace(/\s+/g, "-")}`;
          const isActive =
            currentPath === route ||
            (label === "Resources" &&
              (currentPath === "/blogs" ||
                currentPath === "/success-stories" ||
                currentPath === "/security"));

          if (hasSubmenu) {
            return (
              <div key={label}>
                <button
                  onClick={() => setResourcesExpanded(!resourcesExpanded)}
                  className={`flex items-center justify-between w-full text-[15px] py-3 transition-colors
                    ${isActive ? "text-[#6E0ACE] font-medium" : "font-normal text-[#323338] hover:text-[#6161ff]"}`}
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

                <div className={`overflow-hidden transition-all duration-200 ${resourcesExpanded ? "max-h-60 pb-2" : "max-h-0"}`}>
                  {RESOURCES_SUBMENU.map((item) => {
                    const isSubActive = currentPath === item.route;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleNav(item.route)}
                        className={`flex items-center gap-3 w-full text-[14px] py-2.5 pl-5 pr-2 rounded-lg transition-colors
                          ${isSubActive ? "text-[#6E0ACE] font-medium bg-[#f9f5ff]" : "text-[#555] hover:text-[#6E0ACE] hover:bg-[#f9f5ff]"}`}
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
              className={`flex items-center justify-between text-[15px] py-3 transition-colors
                ${isActive ? "text-[#6E0ACE] font-medium" : "font-normal text-[#323338] hover:text-[#6161ff]"}`}
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
            onClick={() => window.open(url, "_blank")}
            className="w-full sm:w-auto bg-[#0A0A0A] text-white border-none rounded-full px-8 py-4 text-[15px] font-semibold cursor-pointer tracking-[-0.01em] group"
            style={{ letterSpacing: "0.01em", minHeight: "44px" }}
          >
            Book a Demo{" "}
            <span className="translate-y-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Mobile (unchanged) ── */}
      <nav
        className={`fixed left-0 right-0 z-[200] w-full bg-white xl:hidden top-0
          ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.12)]" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
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

      {/* ── Desktop: both layers always rendered, toggled by scroll ── */}
      <div className="hidden xl:block">
        <DesktopFullBar
          navigate={navigate}
          currentPath={currentPath}
          visible={!scrolled}
        />
        <DesktopFloatingNav
          navigate={navigate}
          currentPath={currentPath}
          visible={scrolled}
        />
      </div>
    </>
  );
}