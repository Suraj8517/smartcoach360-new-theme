import { useState,useEffect } from "react";
import logo from "../assets/smartcoach360.svg";
const NavItem = ({ label, hasIcon = false }) => (
  <button className="flex items-center gap-[3px] text-[14px] font-thin text-[#323338] hover:text-[#6161ff] transition-colors duration-150 px-2 py-1 group whitespace-nowrap">
    {hasIcon && (
      <svg
        className="w-3.5 h-3.5 mr-0.5"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 1l1.5 3 3.5.5-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5L3 4.5 6.5 4z" />
      </svg>
    )}
    {label}
    <svg
      className="w-3 h-3 text-[#676879] group-hover:text-[#6161ff] transition-colors mt-[1px] ml-[1px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);

const MobileMenu = ({ open }) => (
  <div
    className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 transition-all duration-300 ${
      open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    <div className="px-5 py-4 flex flex-col divide-y divide-gray-100">
      {[
        { label: "Products", chevron: true },
        { label: "AI", chevron: true, icon: true },
        { label: "Solutions", chevron: true },
        { label: "Resources", chevron: true },
        { label: "Enterprise", chevron: false },
        { label: "Pricing", chevron: false },
        { label: "Log in", chevron: false },
      ].map(({ label, chevron, icon }) => (
        <button
          key={label}
          className="flex items-center justify-between text-[15px] font-normal text-[#323338] hover:text-[#6161ff] py-3 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            {icon && (
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 1l1.5 3 3.5.5-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5L3 4.5 6.5 4z" />
              </svg>
            )}
            {label}
          </span>
          {chevron && (
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      ))}
      <div className="flex flex-col gap-3 pt-4 pb-2">
        <button className="w-full border border-[#6161ff] text-[#6161ff] rounded-full px-5 py-2.5 text-[15px] font-medium hover:bg-[#f5f5ff] transition-colors">
          Contact sales
        </button>
        <button className="w-full rounded-full px-5 py-2.5 text-[15px] font-medium text-white bg-[#6161ff] hover:bg-[#5151e5] transition-colors">
          Get Started →
        </button>
      </div>
    </div>
  </div>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        .nav-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .nav-root { font-family: 'Poppins', sans-serif; }
        .get-started-nav {
          background: #6E0ACE;
          transition: background 0.18s, box-shadow 0.18s, transform 0.15s;
        }
        .get-started-nav:hover {
          background: #9631F5;
                  }
        .contact-sales-nav {
          border: 1.5px solid #6E0ACE;
          color: #6E0ACE;
          transition: background 0.18s;
        }
        .contact-sales-nav:hover {
          background: #EFE0FE;
        }
      `}</style>

      <nav className={`fixed left-0 right-0 nav-root z-200 w-full bg-white h-18 ${
          scrolled ? "top-0 shadow-[0_2px_20px_rgba(0,0,0,0.12)]" : "top-0"
        }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
          <div className="flex items-center justify-between h-[64px]">

            {/* ── Logo ── */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-auto object-contain"
              />
              <div className="flex items-baseline">
  <span className="text-[24px] font-extrabold text-gray-900 tracking-[-0.5px] leading-none">
    smartcoach360
  </span>

  <span className="text-[16px] font-normal text-gray-500 ml-[2px] leading-none">
    .ai
  </span>
</div>
            </div>

            {/* ── Center Nav Links ── */}
            <div className="hidden lg:flex items-left gap-0 xl:gap-1">
              <NavItem label="Features" />
              <button className="flex items-center gap-[3px] text-[14px] font-thin text-[#323338] hover:text-[#6161ff] transition-colors duration-150 px-2 py-1 group whitespace-nowrap">
                Integrations
                <svg className="w-3 h-3 text-[#676879] group-hover:text-[#6161ff] transition-colors mt-[1px] ml-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <NavItem label="Solutions" />
              <NavItem label="About Us" />
              <button className="text-[14px] font-thin text-[#323338] hover:text-[#6161ff] transition-colors duration-150 px-2 py-1 whitespace-nowrap">
                Resources
              </button>
            </div>

            {/* ── Right Actions ── */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <button className="text-[14px] font-thin text-[#323338] hover:text-[#6161ff] transition-colors px-2 py-1 whitespace-nowrap">
                Pricing
              </button>
              <button className="text-[14px] font-thin text-[#323338] hover:text-[#6161ff] transition-colors px-2 py-1 whitespace-nowrap">
                Compare
              </button>
              <button className="contact-sales-nav rounded-full px-[16px] py-[12px] text-[12px] font-thin whitespace-nowrap">
                Contact Us
              </button>
             <button className="get-started-nav rounded-full px-[16px] py-[12px] text-[12px] font-thin text-white whitespace-nowrap group">
  Book a Demo{" "}
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* Mobile dropdown */}
        <MobileMenu open={mobileOpen} />
      </nav>
    </>
  );
}