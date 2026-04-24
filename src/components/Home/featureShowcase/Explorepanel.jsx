import { Check, ChevronRight } from "lucide-react";
import { FEATURES } from "./constants/features";

export const ExplorePanel = ({ active, onSelect }) => (
  <div
    className="bg-[#F6F7FB] rounded-xl border border-gray-100 py-8 px-4"
    style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.12)", width: 370 }}
  >
    <h3 className="text-[15px] font-medium text-gray-900 text-center mb-4 leading-snug">
      What would you like to{" "}
      <span style={{ color: "#6E0ACE" }}>explore?</span>
    </h3>

    <div className="grid grid-cols-3 gap-1 mb-4 mt-6">
      {FEATURES.map((f) => {
        const isActive = active === f.id;
        const { Icon } = f;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className="relative flex flex-col items-center justify-center gap-1.5 rounded-lg border p-3 transition-all duration-150 cursor-pointer"
            style={{
              minHeight: 110,
              borderColor: isActive ? "#6E0ACE" : "#e5e7eb",
              background: "#fff",
            }}
          >
            {/* Checkbox */}
            <div
              className="absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded-sm flex items-center justify-center transition-all"
              style={{
                border: isActive ? "none" : "1.5px solid #6E0ACE",
                background: isActive ? "#6E0ACE" : "transparent",
              }}
            >
              {isActive && (
                <Check size={9} strokeWidth={3} className="text-white" />
              )}
            </div>

            <Icon
              size={22}
              strokeWidth={1.7}
              style={{ color: isActive ? "#6E0ACE" : "#6b7280" }}
            />
            <span
              className="text-[10px] font-light text-center leading-tight whitespace-pre-line"
              style={{ color: "#374151" }}
            >
              {f.label}
            </span>
          </button>
        );
      })}
    </div>

    <div className="flex justify-center">
      <button
        className="w-1/2 rounded-full py-3 text-[13.5px] font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 group hover:opacity-90 active:scale-95"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
          boxShadow: "0 4px 18px rgba(97,97,255,0.35)",
        }}
      >
        Get Started
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className="group-hover:translate-x-1 transition-transform duration-200"
        />
      </button>
    </div>
  </div>
);