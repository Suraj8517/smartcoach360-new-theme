import {
  MessageCircle,
  CheckCircle2,
  Mail,
  Star,
  Bell,
  Video,
  Users,
  Phone,
  Calendar,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Shimmer } from "../../../UI/Shimmer";

export const SkeletonClientEngagement = () => (
  <>

    {/* Recent Activity card — bottom left */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        top: 60, left: -200, width: 220,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        <Bell size={11} className="text-purple-400" />
        <span className="text-[11px] font-bold text-gray-700">Recent Activity</span>
        <span className="ml-auto text-[8px] font-semibold text-purple-400 bg-purple-50 rounded-full px-2 py-0.5">
          Live
        </span>
      </div>

      {[
        { icon: MessageCircle, color: "#25D366", bg: "#dcfce7",    time: "2m ago"  },
        { icon: CheckCircle2,  color: "#16a34a", bg: "#dcfce7",    time: "1h ago"  },
        { icon: Video,         color: "#6264A7", bg: "#ede9fe",   time: "2h ago"  },
        { icon: Calendar,      color: "#f97316", bg: "#fff7ed",    time: "Tomorrow"},
        { icon: Mail,          color: "#3b82f6", bg: "#dbeafe",    time: "3h ago"  },
      ].map(({ icon: Icon, color, bg, text, time }, i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5 last:mb-0">
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
            style={{ background: bg }}
          >
            <Icon size={10} style={{ color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] text-gray-700 font-medium truncate"><Shimmer w={100} h={6} rounded="rounded-full" />
</div>
          </div>
          <span className="text-[8px] text-gray-400 shrink-0">{time}</span>
        </div>
      ))}
    </div>

    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: -120, right: -145, width: 165,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      {/* NPS */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-4 h-4 rounded-md bg-rose-50 flex items-center justify-center">
          <Star size={9} color="#fb7185" />
        </div>
        <span className="text-[10px] font-bold text-gray-700">Client NPS</span>
      </div>

      <div
        className="text-[28px] font-black leading-none mb-0.5"
        style={{ color: "#fb7185" }}
      >
        94
      </div>
      <div className="text-[9px] text-emerald-500 font-semibold mb-2">
        World-class score
      </div>

      {/* Star row */}
      <div className="flex items-center gap-0.5 mb-3">
        {[5,5,5,4,5,5,5,5,4,5].map((s, i) => (
          <Star
            key={i}
            size={9}
            fill={s === 5 ? "#fb7185" : "#fecdd3"}
            color="transparent"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mb-2.5" />

      {/* Live sessions */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-4 h-4 rounded-md bg-violet-50 flex items-center justify-center">
          <Video size={9} color="#7c3aed" />
        </div>
        <span className="text-[10px] font-bold text-gray-700">Live Sessions</span>
      </div>

      {[
        { label: "Teams",  count: "3 active", color: "#6264A7", bg: "#ede9fe" },
        { label: "Zoom",   count: "1 active", color: "#2563eb", bg: "#dbeafe" },
      ].map(({ label, count, color, bg }, i) => (
        <div key={i} className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: color }}
            />
            <span className="text-[9px] text-gray-500">{label}</span>
          </div>
          <span
            className="text-[8px] font-bold rounded-full px-1.5 py-0.5"
            style={{ background: bg, color }}
          >
            {count}
          </span>
        </div>
      ))}

      {/* Engagement spark */}
      <div
        className="mt-2 rounded-lg p-1.5 flex items-center gap-1.5"
        style={{ background: "#f0fdf4" }}
      >
        <TrendingUp size={9} color="#16a34a" />
        <span className="text-[8px] font-semibold text-emerald-600">
          Engagement up 12% this week
        </span>
      </div>
    </div>
  </>
);