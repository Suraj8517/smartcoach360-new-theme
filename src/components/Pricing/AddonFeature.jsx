const cards = [
  {
    title: "WhatsApp Integration",
    text:"Direct WhatsApp messaging with clients",
    tags: ["₹2,000/mo"],
    bg: "bg-emerald-100",
    tagBorder: "border-emerald-300 text-emerald-800",
    exploreBg: "bg-emerald-200 text-emerald-900",
  },
  {
    title: "Advanced Analytics",
    text:"Google, Facebook & Meta ad analytics",
    tags: ["₹10,000/mo"],
    bg: "bg-violet-100",
    tagBorder: "border-violet-300 text-violet-800",
    exploreBg: "bg-violet-200 text-violet-900",
  },
  {
    title: "Lead Generation Tools",
    text:"Advanced lead gen & campaign tools",
    tags: ["₹10,000/mo"],
    bg: "bg-gray-800",
    tagBorder: "border-gray-600 text-gray-200",
    exploreBg: "bg-gray-700 text-white",
    dark: true,
  },
  {
    title: "Third-Party Integrations",
    text:"Calling, payment & other integrations",
    tags: ["₹20,000"],
    bg: "bg-amber-100",
    tagBorder: "border-amber-300 text-amber-800",
    exploreBg: "bg-amber-200 text-amber-900",
  },
  {
    title: "AI Call Transcription & Audit",
    text:"AI-powered call transcription & audit",
    tags: ["Addon"],
    bg: "bg-sky-100",
    tagBorder: "border-sky-300 text-sky-800",
    exploreBg: "bg-sky-200 text-sky-900",
  },
  {
    title: "AI Diet & Workout Recs",
    text:"AI chart recommendations & verification",
    tags: ["Addon"],
    bg: "bg-rose-100",
    tagBorder: "border-rose-300 text-rose-800",
    exploreBg: "bg-rose-200 text-rose-900",
  },
];

export default function AddonFeature() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
           Add-on features
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-5">
            Enhance Your Workflow <br className="hidden sm:block" /> Further
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
Unlock advanced tools and smart integrations that help your team work faster, manage better, and scale effortlessly.          </p>
          <button className="bg-gray-900 hover:bg-gray-700 transition-colors text-white font-medium px-7 py-3.5 rounded-full text-base inline-flex items-center gap-2">
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} rounded-3xl p-8 flex flex-col justify-between min-h-[260px] group`}
            >
              <div>
                <h3 className={`text-2xl font-light mb-6 leading-snug ${card.dark ? "text-white" : "text-gray-900"}`}>
                  {card.title}
                </h3>
                <p className={`text-lg ${card.dark ? "text-gray-300" : "text-gray-600"}`}>
                  {card.text}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border bg-transparent ${card.tagBorder}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}