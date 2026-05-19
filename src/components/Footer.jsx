import logo from '../assets/smartcoach360.svg'

export default function SmartCoachFooter() {
  const navLinks = [
    { label: "Security", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "SmartCoach AI Terms and Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Logo */}
        <a href="#" aria-label="SmartCoach360.ai" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="SmartCoach360.ai" className="h-6 w-auto object-contain" />
          <div className="flex items-baseline leading-none">
            <span className="text-[22px] font-medium text-gray-900 tracking-[-0.5px]">
              smartcoach360
            </span>
            <span className="text-[16px] font-medium text-gray-500 ml-[1px]">
              .ai
            </span>
          </div>
        </a>

        {/* Nav links — wraps on mobile */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-black transition-colors duration-150 hover:text-purple-900 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-black text-center sm:text-right whitespace-nowrap flex-shrink-0">
          All Rights Reserved © smartcoach360.ai
        </p>

      </div>
    </footer>
  );
}