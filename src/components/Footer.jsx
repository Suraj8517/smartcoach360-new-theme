import logo from '../assets/smartcoach360.svg'
export default function SmartCoachFooter() {
  const navLinks = [
    { label: "Security", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "SmartCoach AI Terms and Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full  bg-white px-8 py-12">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">

        {/* Logo + Nav */}
        <div className="flex items-center gap-10">
      <a
  href="#"
  aria-label="SmartCoach360.ai"
  className="flex items-center gap-2"
>
  <img
    src={logo}
    alt="SmartCoach360.ai"
    className="h-6 w-auto object-contain"
  />

  <div className="flex items-baseline leading-none">
    <span className="text-[22px] font-medium text-gray-900 tracking-[-0.5px]">
      smartcoach360
    </span>

    <span className="text-[16px] font-medium text-gray-500 ml-[1px]">
      .ai
    </span>
  </div>
</a>

          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-black transition-colors duration-150 hover:text-purple-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-sm text-black">
          All Rights Reserved © smartcoach360.ai
        </p>

      </div>
    </footer>
  );
}