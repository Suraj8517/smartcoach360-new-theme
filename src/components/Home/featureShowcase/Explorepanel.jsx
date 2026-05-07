import { ChevronRight } from "lucide-react";
import { FEATURES } from "./constants/features";

export const ExplorePanel = ({ active, onSelect }) => (
  <div
    className="bg-white border border-gray-100 py-7 px-6"
    style={{ borderRadius: 24, boxShadow: "0 8px 40px rgba(0,0,0,0.08)", width: 340 }}
  >
    <h3 className="text-[15px] font-normal text-gray-500 text-center mb-6 leading-snug">
      What would you like to{" "}
      <span className="font-medium" style={{ color: "#6E0ACE" }}>explore?</span>
    </h3>

    <div className="grid grid-cols-3 gap-2 mb-5">
      {FEATURES.map((f) => {
        const isActive = active === f.id;
        const { Icon } = f;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            onMouseEnter={() => onSelect(f.id)}
            className="relative flex flex-col items-center justify-center gap-1.5 p-3 transition-all duration-150 cursor-pointer"
            style={{
              minHeight: 100,
              borderRadius: 16,
              border: `1.5px solid ${isActive ? "#6E0ACE" : "transparent"}`,
              background: isActive ? "#f5eeff" : "#f5f5f5",
            }}
          >
            {/* Selection dot */}
            <div
              className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full transition-all"
              style={{
                background: isActive ? "#6E0ACE" : "transparent",
                border: isActive ? "none" : "1.5px solid rgba(110,10,206,0.35)",
              }}
            />

            <Icon
              size={20}
              strokeWidth={1.7}
              style={{ color: isActive ? "#6E0ACE" : "#9ca3af" }}
            />
            <span
              className="text-[10px] text-center leading-tight whitespace-pre-line"
              style={{ color: isActive ? "#6E0ACE" : "#6b7280" }}
            >
              {f.label}
            </span>
          </button>
        );
      })}
    </div>

    <div className="flex justify-center">
      <button
        className="rounded-full py-2.5 px-7 text-[13.5px] font-medium text-white flex items-center gap-1.5 transition-all duration-150 hover:opacity-90 active:scale-95 group"
        style={{ background: "#6E0ACE" }}
      >
        Book a Demo
        <ChevronRight
          size={15}
          strokeWidth={2.5}
          className="group-hover:translate-x-0.5 transition-transform duration-150"
        />
      </button>
    </div>
  </div>
);