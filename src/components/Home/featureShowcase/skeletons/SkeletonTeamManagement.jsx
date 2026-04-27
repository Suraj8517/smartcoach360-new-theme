
import { Shimmer,CustomShimmer } from "../../../UI/Shimmer";
import avatar1 from "../../../../assets/crm/avatar/avatar8.png";
import avatar2 from "../../../../assets/crm/avatar/avatar8.png";
import avatar3 from "../../../../assets/crm/avatar/avatar9.png";

const programFeatures = [
  {
    avatar: avatar1,
    top: 160,
    left: -210,
    barColor: "linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)",
    barBg: "#ede9fe",
    barWidth: "72%",
    accentColor: "#7c3aed",
    accentLight: "#f5f3ff",
    blur: true,
  },
  {
    avatar: avatar2,
    left: "485%",
    bottom: -60,
    barColor: "linear-gradient(90deg, #f97316 0%, #fdba74 100%)",
    barBg: "#fff7ed",
    barWidth: "58%",
    accentColor: "#f97316",
    accentLight: "#fff7ed",
    blur: false,
  },
  {
    avatar: avatar3,
    bottom: "-95%",
    left: 400,
    barColor: "linear-gradient(90deg, #059669 0%, #34d399 100%)",
    barBg: "#ecfdf5",
    barWidth: "85%",
    accentColor: "#059669",
    accentLight: "#ecfdf5",
    blur: true,
  },
];
export const SkeletonTeamManagement = () => (
  <>
    {/* Stat Summary Bar */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-4"
      style={{
        bottom: -120, right: 205, width: 240,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
        <span className="text-[11px] font-semibold text-gray-700">My tasks</span>
        <span className="ml-auto text-[10px] font-semibold text-violet-700 bg-violet-50 rounded-full px-2 py-0.5">Today</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-1">
        {[
          { label: "Overdue", color: "text-purple-500" },
          { label: "Open",    color: "text-indigo-500" },
          { label: "Done",    color: "text-emerald-600" },
        ].map(({ label, color }) => (
          <div key={label} className="bg-gray-50 rounded-lg p-2 text-center">
            <Shimmer w={28} h={14} rounded="rounded-md" className="mx-auto mb-1" />
            <div className={`text-[9px] font-semibold ${color}`}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Task Card */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 100, left: -180, width: 205,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[11px] font-bold text-pink-700 flex-shrink-0">
          SA
        </div>
        <div className="flex-1 min-w-0">
          <Shimmer w={90} h={7} rounded="rounded-full" className="mb-1" />
          <Shimmer w={48} h={6} rounded="rounded-full" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-1.5 mb-2.5">
        <span className="text-[9px] font-semibold bg-purple-50 text-purple-700 rounded-full px-2 py-0.5">High</span>
        <span className="text-[9px] font-semibold bg-violet-50 text-violet-700 rounded-full px-2 py-0.5">Induction Call</span>
      </div>

      <div className="h-px bg-gray-100 mb-2" />

      {/* Info rows */}
      {[
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>,
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      ].map((icon, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-1.5">
          {icon}
          <Shimmer w={i === 2 ? 60 : 110} h={6} rounded="rounded-full" />
          {i === 2 && <span className="text-[8px] font-semibold bg-violet-50 text-violet-700 rounded-full px-1.5 py-0.5 ml-auto">Fitness</span>}
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-purple-50 bg-purple-50 -mx-3 -mb-3 px-3 pb-3 rounded-b-2xl">
        <div className="flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6E0ACE" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span className="text-[9px] text-purple-400">26 Feb 2026 12:00 AM</span>
        </div>
        <span className="text-[9px] font-bold bg-purple-500 text-white rounded-full px-2 py-0.5">Overdue</span>
      </div>
    </div>

    {/* Mini status panel */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: -25, right: -115, width: 155,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        <span className="text-[11px] font-semibold text-gray-700">Task status</span>
      </div>

      {[
        { label: "Completed", w: 90, pct: "75%", color: "#16a34a", bg: "#dcfce7" },
        { label: "Pending",   w: 65, pct: "54%", color: "#7c3aed", bg: "#ede9fe" },
        { label: "Overdue",   w: 40, pct: "33%", color: "#ef4444", bg: "#fee2e2" },
      ].map(({ label, w, pct, color, bg }) => (
        <div key={label} className="mb-2.5">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-gray-500">{label}</span>
            <span className="text-[10px] font-semibold" style={{ color }}>{pct}</span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: pct, background: color }} />
          </div>
        </div>
      ))}
    </div>
    <div className="relative" style={{ width: 240, height: 320 }}>
                  {programFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                       top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                        animation: `floatIn 0.45s cubic-bezier(.22,1,.36,1) ${0.1 + i * 0.1}s both`,
                      }}
                    >
                      <div
                        className="inline-flex items-center gap-3  p-2.5 pr-4"
                        style={{
                          minWidth: 180,
                        }}
                      >
                        {/* Avatar with colored ring */}
                        <div
                          className="w-[42px] h-[42px] rounded-xl overflow-hidden border-.5"
                          style={{
                            borderColor: item.accentColor,
                            background: item.accentLight,
                          }}
                        >
                          <img
                            src={item.avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
            
                        {/* Shimmer bars */}
                        <div className="flex flex-col gap-2 flex-1">
                          <CustomShimmer
                            w={70}
                            h={6}
                            color={item.accentColor}
                            lightColor={item.accentLight}
                          />
            
                          {/* Progress bar */}
                          <div
                            className="h-[5px] rounded-full overflow-hidden w-full"
                            style={{ background: item.barBg }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: item.barWidth,
                                background: item.barColor,
                              }}
                            />
                          </div>
            
                          <CustomShimmer
                            w={45}
                            h={5}
                            color={item.accentColor}
                            lightColor={item.accentLight}
                          />
                        </div>
                        {item.blur && (
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 z-20 pointer-events-none" />
        )}
                      </div>
                    </div>
                  ))}
                </div>
                
  </>
);