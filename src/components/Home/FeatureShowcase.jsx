import { useState } from "react";
import {
  LayoutGrid,
  Megaphone,
  Users,
  Code2,
  Monitor,
  Sparkles,
  Bot,
  Wrench,
  Zap,
  Calendar,
  Phone,
  Image,
  ChevronRight,
  Check,
  ChevronLeft,
  TrendingUp,
  Activity,
  Flame,
  Dumbbell,
  GitPullRequest,
  Bug,
  Terminal,
  Shield,
  Wifi,
  Server,
  MessageSquare,
  Star,
  BarChart2,
  Clock,
  Target,
  Layers,
  Play,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Circle,
  DollarSign,
  Heart,
  UserCheck,
  Lock,Smartphone,Bell,PieChart,FileText,Award, Cpu,Database,BarChart,CreditCard,Users2,ChartBar,Briefcase,Mail,Settings,
} from "lucide-react";
import { FEATURES } from "./featureShowcase/constants/features";
import { Shimmer } from "../UI/Shimmer";
import { ExplorePanel } from "./featureShowcase/Explorepanel";
import { SkeletonProgramManagement } from "./featureShowcase/skeletons/SkeletonProgramManagement";
import { SkeletonNutrition } from "./featureShowcase/skeletons/SkeletonNutrition";
import { SkeletonDashboards } from "./featureShowcase/skeletons/SkeletonDashboard";
import {AgentBadge} from '../UI/AgentBadge'
// ── Skeleton 3: Payments — card + transactions ───────────────
const SkeletonPayments = () => (
  <>
    {/* Card visual — left, prominent */}
    <div
      className="absolute z-10 rounded-2xl p-4"
      style={{
        top: 75,
        left: -160,
        width: 230,
        background:
          "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
        boxShadow: "0 16px 48px rgba(6,78,59,0.35)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-[9px] text-emerald-200 mb-0.5">Balance</div>
          <div className="text-[22px] font-black text-white leading-none">
            ₹4.2M
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <CreditCard size={14} className="text-white" />
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-[8px] text-emerald-300 mb-0.5">
            Processed today
          </div>
          <div className="text-[12px] font-bold text-white">₹82,400</div>
        </div>
        <div className="text-[8px] text-emerald-200">**** 4291</div>
      </div>
    </div>

    {/* Transaction list — bottom right diagonal */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 90,
        right: -20,
        width: 195,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        <DollarSign size={11} className="text-emerald-400" />
        <span className="text-[11px] font-bold text-gray-700">
          Transactions
        </span>
      </div>
      {[
        ["Subscription", "+₹12,400", "✅"],
        ["Refund", "-₹2,100", "🔄"],
        ["New Order", "+₹8,900", "✅"],
        ["Payout", "-₹5,000", "⬆️"],
      ].map(([t, a, icon], i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px]">{icon}</span>
          <span className="text-[9px] text-gray-600 flex-1">{t}</span>
          <span
            className="text-[10px] font-bold"
            style={{ color: a.startsWith("+") ? "#16a34a" : "#dc2626" }}
          >
            {a}
          </span>
        </div>
      ))}
    </div>

    {/* Success rate — top right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 35,
        right: -170,
        width: 160,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Award size={11} className="text-emerald-400" />
        <span className="text-[10px] font-bold text-gray-700">
          Success Rate
        </span>
      </div>
      <div className="text-[28px] font-black text-gray-800 leading-none">
        99.9%
      </div>
      <div className="text-[9px] text-gray-400 mb-2">0.1% failure rate</div>
      <div className="flex gap-0.5">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex-1 h-3 rounded-sm"
            style={{ background: i === 18 ? "#fca5a5" : "#86efac" }}
          />
        ))}
      </div>
    </div>
  </>
);

// ── Skeleton 4: Client Engagement — overlapping modals ───────
const SkeletonClientEngagement = () => (
  <>
    {/* Client profile — left with avatar */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-4"
      style={{
        top: 80,
        left: -155,
        width: 220,
        boxShadow: "0 10px 40px rgba(244,63,94,0.12)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-[16px]">
          👤
        </div>
        <div>
          <Shimmer w={90} h={9} rounded="rounded-full" className="mb-1.5" />
          <Shimmer w={65} h={8} rounded="rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-1">
        {[
          ["Sessions", "24", "#ffe4e6"],
          ["Goals", "8/10", "#dcfce7"],
          ["NPS", "96", "#dbeafe"],
        ].map(([l, v, bg], i) => (
          <div
            key={i}
            className="rounded-lg p-2 text-center"
            style={{ background: bg }}
          >
            <div className="text-[14px] font-black text-gray-800">{v}</div>
            <div className="text-[8px] text-gray-500">{l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Engagement timeline — bottom, overlapping */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 85,
        left: -80,
        width: 210,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        <Bell size={11} className="text-rose-400" />
        <span className="text-[11px] font-bold text-gray-700">
          Recent Activity
        </span>
      </div>
      {[
        ["💬", "Check-in message sent", "2m ago"],
        ["✅", "Goal milestone reached", "1h ago"],
        ["📧", "Progress report shared", "3h ago"],
      ].map(([icon, text, time], i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-[11px] mt-0.5">{icon}</span>
          <div className="flex-1">
            <div className="text-[9px] text-gray-700 font-medium">{text}</div>
            <div className="text-[8px] text-gray-400">{time}</div>
          </div>
        </div>
      ))}
    </div>

    {/* NPS badge — top right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 40,
        right: -165,
        width: 155,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Star size={11} className="text-rose-400" />
        <span className="text-[10px] font-bold text-gray-700">Client NPS</span>
      </div>
      <div className="text-[28px] font-black text-gray-800 leading-none">
        94
      </div>
      <div className="text-[9px] text-emerald-500 font-semibold">
        World-class score
      </div>
      <div className="flex items-center gap-0.5 mt-2">
        {[5, 5, 5, 4, 5, 5, 5, 5, 4, 5].map((s, i) => (
          <Star
            key={i}
            size={10}
            fill={s === 5 ? "#fb7185" : "#fecdd3"}
            color="transparent"
          />
        ))}
      </div>
    </div>
  </>
);

// ── Skeleton 5: Team Mgmt — org chart style ──────────────────
const SkeletonTeamManagement = () => (
  <>
    {/* Org hierarchy — left */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-4"
      style={{
        top: 70,
        left: -155,
        width: 225,
        boxShadow: "0 10px 40px rgba(245,158,11,0.12)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Users2 size={12} className="text-amber-500" />
        <span className="text-[11px] font-bold text-gray-700">
          Org Structure
        </span>
        <span className="ml-auto text-[9px] font-bold text-amber-500 bg-amber-50 rounded-full px-2 py-0.5">
          38 members
        </span>
      </div>
      {/* CEO */}
      <div className="flex justify-center mb-1.5">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 text-center">
          <div className="text-[10px] font-black text-amber-700">CEO</div>
          <Shimmer
            w={60}
            h={7}
            rounded="rounded-full"
            className="mt-1 mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center h-3">
        <div className="w-px bg-gray-200" />
      </div>
      <div className="flex gap-2 justify-center">
        {["CTO", "COO", "CMO"].map((role, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-center"
          >
            <div className="text-[9px] font-bold text-gray-600">{role}</div>
            <Shimmer
              w={38}
              h={6}
              rounded="rounded-full"
              className="mt-1 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Role permissions — bottom right */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 100,
        right: -30,
        width: 195,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Lock size={11} className="text-amber-500" />
        <span className="text-[11px] font-bold text-gray-700">
          Role Permissions
        </span>
      </div>
      {[
        ["Admin", "Full Access", "#dcfce7", "#15803d"],
        ["Manager", "Edit + View", "#dbeafe", "#1d4ed8"],
        ["Member", "View Only", "#fef9c3", "#92400e"],
      ].map(([role, access, bg, c], i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[11px]">
            {["👑", "🧑‍💼", "👤"][i]}
          </div>
          <div className="flex-1">
            <div className="text-[9px] font-bold text-gray-700">{role}</div>
            <div className="text-[8px] text-gray-400">{access}</div>
          </div>
          <span
            className="text-[8px] font-bold rounded-full px-2 py-0.5"
            style={{ background: bg, color: c }}
          >
            Active
          </span>
        </div>
      ))}
    </div>

    {/* Headcount stat — top right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 35,
        right: -165,
        width: 155,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <UserCheck size={11} className="text-amber-500" />
        <span className="text-[10px] font-bold text-gray-700">Team Health</span>
      </div>
      <div className="text-[26px] font-black text-gray-800 leading-none">
        94%
      </div>
      <div className="text-[9px] text-gray-400 mb-2">Engagement rate</div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-400"
          style={{ width: "94%" }}
        />
      </div>
    </div>
  </>
);

// ── Skeleton 6: Mobile App — device frames ───────────────────
const SkeletonMobileApp = () => (
  <>
    {/* Mini phone frame — left */}
    <div
      className="absolute z-10 rounded-2xl overflow-hidden"
      style={{
        top: 65,
        left: -140,
        width: 115,
        height: 210,
        background: "#1e1b4b",
        boxShadow: "0 16px 48px rgba(99,102,241,0.35)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
        border: "3px solid #312e81",
      }}
    >
      <div className="bg-indigo-900 px-3 pt-3 pb-2">
        <Shimmer
          w="70%"
          h={8}
          rounded="rounded-full"
          className="mb-1.5 opacity-40"
        />
        <Shimmer w="50%" h={6} rounded="rounded-full" className="opacity-30" />
      </div>
      <div className="px-2 py-2 flex flex-col gap-1.5">
        {[60, 85, 45, 75].map((w, i) => (
          <div key={i} className="rounded-lg bg-indigo-800/60 p-1.5">
            <Shimmer
              w={`${w}%`}
              h={7}
              rounded="rounded-full"
              className="opacity-40"
            />
          </div>
        ))}
        <div className="mt-1 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-2 text-center">
          <span className="text-[9px] font-bold text-white">Open App →</span>
        </div>
      </div>
    </div>

    {/* Push notification — right, floating */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        top: 55,
        right: -165,
        width: 195,
        boxShadow: "0 10px 40px rgba(99,102,241,0.12)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-xl bg-indigo-100 flex items-center justify-center text-[13px]">
          📱
        </div>
        <div>
          <div className="text-[10px] font-bold text-gray-800">
            Push Notification
          </div>
          <div className="text-[8px] text-gray-400">Just delivered</div>
        </div>
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
      </div>
      <div className="bg-indigo-50 rounded-xl p-2">
        <div className="text-[9px] font-semibold text-indigo-800">
          🎯 Goal reached!
        </div>
        <div className="text-[8px] text-indigo-600 mt-0.5">
          You hit 10,000 steps today. Keep it up!
        </div>
      </div>
    </div>

    {/* Uptime — bottom right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        bottom: 95,
        right: -155,
        width: 150,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Wifi size={11} className="text-indigo-400" />
        <span className="text-[10px] font-bold text-gray-700">App Uptime</span>
      </div>
      <div className="text-[26px] font-black text-gray-800 leading-none">
        99.98%
      </div>
      <div className="flex gap-0.5 mt-2">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex-1 h-3 rounded-sm"
            style={{ background: i === 11 ? "#c7d2fe" : "#818cf8" }}
          />
        ))}
      </div>
    </div>
  </>
);

// ── Skeleton 7: Security — threat dashboard ──────────────────
const SkeletonSecurity = () => (
  <>
    {/* Threat scanner — left */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-4"
      style={{
        top: 80,
        left: -155,
        width: 220,
        boxShadow: "0 10px 40px rgba(239,68,68,0.12)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Shield size={12} className="text-red-400" />
        <span className="text-[11px] font-bold text-gray-700">
          Threat Monitor
        </span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8px] text-emerald-500 font-bold">SECURE</span>
        </div>
      </div>
      {[
        ["Firewall", "Active", "#dcfce7", "#15803d"],
        ["Encryption", "AES-256", "#dbeafe", "#1d4ed8"],
        ["2FA", "Enforced", "#f3e8ff", "#7c3aed"],
        ["Last Scan", "2m ago", "#fef9c3", "#92400e"],
      ].map(([l, v, bg, c], i) => (
        <div
          key={i}
          className="flex items-center gap-2 mb-2 rounded-lg p-2"
          style={{ background: bg }}
        >
          <span className="text-[9px] text-gray-500 flex-1">{l}</span>
          <span className="text-[9px] font-bold" style={{ color: c }}>
            {v}
          </span>
        </div>
      ))}
    </div>

    {/* Compliance badges — bottom center */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 90,
        left: "40%",
        transform: "translateX(-40%)",
        width: 210,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        <Award size={11} className="text-red-400" />
        <span className="text-[11px] font-bold text-gray-700">
          Compliance Status
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {["GDPR ✅", "HIPAA ✅", "SOC2 ✅", "ISO 27001 ✅"].map((badge, i) => (
          <span
            key={i}
            className="text-[9px] font-bold rounded-full px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>

    {/* Zero breach stat — top right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 40,
        right: -165,
        width: 155,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Lock size={11} className="text-red-400" />
        <span className="text-[10px] font-bold text-gray-700">
          Breach Record
        </span>
      </div>
      <div className="text-[30px] font-black text-gray-800 leading-none">0</div>
      <div className="text-[9px] text-emerald-500 font-bold">
        Incidents ever recorded
      </div>
      <div className="text-[8px] text-gray-400 mt-0.5">100% audit ready</div>
    </div>
  </>
);

// ── Skeleton 8: Workflows — top-to-bottom timeline ───────────
const SkeletonWorkflows = () => (
  <>
    {/* Flow diagram — left, timeline style */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-4"
      style={{
        top: 65,
        left: -160,
        width: 235,
        boxShadow: "0 10px 40px rgba(6,182,212,0.12)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.05s both",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Zap size={12} className="text-cyan-400" />
        <span className="text-[11px] font-bold text-gray-700">
          Automation Flow
        </span>
        <span className="ml-auto text-[9px] bg-cyan-50 text-cyan-600 font-bold rounded-full px-2 py-0.5">
          Running
        </span>
      </div>
      {[
        ["⚡", "Trigger", "New lead submitted", "#dbeafe", "#3b82f6"],
        ["🔍", "Filter", "Score ≥ 70 only", "#fef9c3", "#f59e0b"],
        ["📧", "Action", "Send welcome email", "#dcfce7", "#22c55e"],
        ["💬", "Notify", "Slack → Sales team", "#f3e8ff", "#a855f7"],
      ].map(([icon, type, label, bg, c], i, arr) => (
        <div key={i}>
          <div
            className="flex items-center gap-2 rounded-xl p-2.5"
            style={{ background: bg }}
          >
            <span className="text-[12px]">{icon}</span>
            <div>
              <div
                className="text-[8px] font-black uppercase tracking-wide"
                style={{ color: c }}
              >
                {type}
              </div>
              <div className="text-[9px] text-gray-600">{label}</div>
            </div>
          </div>
          {i < arr.length - 1 && (
            <div className="flex justify-center py-0.5">
              <div className="w-px h-3 bg-gray-200" />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Automations saved — bottom right */}
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3"
      style={{
        bottom: 90,
        right: -25,
        width: 190,
        boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.18s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Clock size={11} className="text-cyan-400" />
        <span className="text-[11px] font-bold text-gray-700">Time Saved</span>
      </div>
      <div className="flex gap-3">
        {[
          ["127", "Flows", "#06b6d4"],
          ["340h", "Saved", "#22c55e"],
          ["99%", "Success", "#a855f7"],
        ].map(([n, l, c], i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <span className="text-[17px] font-black" style={{ color: c }}>
              {n}
            </span>
            <span className="text-[8px] text-gray-400">{l}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-8 mt-2">
        {[50, 70, 45, 90, 65, 80, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 6 ? "#06b6d4" : "#cffafe",
            }}
          />
        ))}
      </div>
    </div>

    {/* Trigger log — top right */}
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 40,
        right: -170,
        width: 160,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "floatIn 0.45s cubic-bezier(.22,1,.36,1) 0.25s both",
      }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <AlertCircle size={11} className="text-cyan-400" />
        <span className="text-[10px] font-bold text-gray-700">
          Last Triggers
        </span>
      </div>
      {[
        ["New form submit", "2s ago"],
        ["Lead scored 85", "1m ago"],
        ["Email dispatched", "4m ago"],
      ].map(([t, time], i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
          <span className="text-[9px] text-gray-600 flex-1">{t}</span>
          <span className="text-[8px] text-gray-400">{time}</span>
        </div>
      ))}
    </div>
  </>
);

const SkeletonDefault = () => (
  <>
    <div
      className="absolute z-10 bg-white rounded-2xl border border-gray-100 p-3.5"
      style={{
        top: 90,
        left: -130,
        width: 200,
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        filter: "blur(3px)",
        opacity: 0.5,
      }}
    >
      <Shimmer w={100} h={10} rounded="rounded-full" className="mb-3" />
      {[70, 65, 70, 50].map((w, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <Shimmer w={40} h={8} rounded="rounded-full" />
          <Shimmer w={`${w}%`} h={6} rounded="rounded-full" />
        </div>
      ))}
    </div>
    <div
      className="absolute z-10 bg-white rounded-xl border border-gray-100 p-3"
      style={{
        top: 40,
        right: -155,
        width: 145,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        filter: "blur(3px)",
        opacity: 0.5,
      }}
    >
      <Shimmer w={80} h={9} rounded="rounded-full" className="mb-2" />
      <Shimmer w={50} h={20} rounded="rounded-xl" className="mb-2" />
      <Shimmer w="100%" h={8} rounded="rounded-full" />
    </div>
  </>
);

const SKELETON_MAP = {
  0: SkeletonProgramManagement,
  1: SkeletonNutrition,
  2: SkeletonDashboards,
  3: SkeletonPayments,
  4: SkeletonClientEngagement,
  5: SkeletonTeamManagement,
  6: SkeletonMobileApp,
  7: SkeletonSecurity,
  8: SkeletonWorkflows,
};

// ── Mobile skeletons ─────────────────────────────────────────
const MOBILE_SKELETON_MAP = {
  0: () => (
    <div
      className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 p-2.5 w-38"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)", width: 148 }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Target size={10} className="text-violet-400" />
        <span className="text-[9px] font-bold text-gray-700">Sprint Board</span>
      </div>
      {[
        ["In Progress", "60%", "#7c3aed"],
        ["Review", "35%", "#f59e0b"],
        ["Done", "90%", "#22c55e"],
      ].map(([l, w, c], i) => (
        <div key={i} className="flex items-center gap-1.5 mb-1">
          <span className="text-[8px] text-gray-400 w-14 flex-shrink-0">
            {l}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-gray-100">
            <div
              className="h-full rounded-full"
              style={{ width: w, background: c, opacity: 0.8 }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
  1: () => (
    <div
      className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 p-2.5"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)", width: 148 }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Flame size={10} className="text-rose-400" />
        <span className="text-[9px] font-bold text-gray-700">Macros Today</span>
      </div>
      <div className="flex gap-2">
        {[
          ["P", "82g", "#fb7185"],
          ["C", "210g", "#f97316"],
          ["F", "44g", "#a78bfa"],
        ].map(([l, v, c], i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div className="text-[12px] font-black" style={{ color: c }}>
              {v}
            </div>
            <div className="text-[8px] text-gray-400">{l}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  2: () => (
    <div
      className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 p-2.5"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)", width: 148 }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <TrendingUp size={10} className="text-blue-400" />
        <span className="text-[9px] font-bold text-gray-700">Live KPIs</span>
      </div>
      {[
        ["Revenue", "₹84.2K", "#1d4ed8"],
        ["Retention", "91%", "#7c3aed"],
      ].map(([l, v, c], i) => (
        <div key={i} className="flex items-center justify-between mb-1">
          <span className="text-[8px] text-gray-400">{l}</span>
          <span className="text-[10px] font-black" style={{ color: c }}>
            {v}
          </span>
        </div>
      ))}
    </div>
  ),
  default: (feature) => (
    <div
      className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 p-2.5 w-32"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
    >
      <Shimmer w="80%" h={8} rounded="rounded-full" className="mb-1.5" />
      <Shimmer w="60%" h={8} rounded="rounded-full" className="mb-1.5" />
      <Shimmer w="90%" h={6} rounded="rounded-full" />
    </div>
  ),
};


// ── Skeleton screen placeholder ──────────────────────────────
const SkeletonScreen = () => (
  <div
    className="w-full h-full flex flex-col"
    style={{ minHeight: "460px", background: "#f5f5ff" }}
  >
    <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
      <div className="w-24 h-5 rounded-lg bg-indigo-100" />
      <div className="flex gap-1.5">
        {[60, 50, 70].map((w, i) => (
          <div
            key={i}
            className="h-5 rounded-full bg-gray-100"
            style={{ width: w }}
          />
        ))}
      </div>
    </div>
    <div className="px-5 py-5 flex flex-col gap-3">
      <div className="w-44 h-7 rounded-xl bg-indigo-100 mb-1" />
      {[75, 90, 60, 82, 68, 78].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-200 flex-shrink-0" />
          <div
            className="h-3.5 rounded-lg bg-gray-100"
            style={{ width: `${w}%` }}
          />
          <div
            className="w-20 h-5 rounded-full ml-auto flex-shrink-0"
            style={{
              background:
                i % 3 === 0 ? "#dcfce7" : i % 3 === 1 ? "#fef9c3" : "#fee2e2",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// ── Main Component ───────────────────────────────────────────
export default function FeatureShowcase() {
  const [active, setActive] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);
  const [mobIndex, setMobIndex] = useState(0);

  const displayFeature = active !== null ? FEATURES[active] : FEATURES[0];
  const isBlurred = active === null;

  const handleSelect = (id) => {
    if (id === active) {
      setActive(null);
      setAnimKey((k) => k + 1);
      return;
    }
    setActive(id);
    setAnimKey((k) => k + 1);
    setImgFailed(false);
  };

  const mobPrev = () =>
    setMobIndex((i) => (i - 1 + FEATURES.length) % FEATURES.length);
  const mobNext = () => setMobIndex((i) => (i + 1) % FEATURES.length);
  const mobFeature = FEATURES[mobIndex];

  const ActiveDesktopSkeleton = active !== null ? SKELETON_MAP[active] : null;
  const MobSkeletonComp =
    MOBILE_SKELETON_MAP[mobIndex] || MOBILE_SKELETON_MAP.default;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .fs-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .fs-root { font-family: 'Poppins', sans-serif; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(14px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmerSlide {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .img-anim { animation: imgFade 0.3s ease both; }
        .floating-tag { animation: slideUp 0.4s ease both; }
        .skeleton-card { animation: floatIn 0.4s cubic-bezier(.22,1,.36,1) both; }

        /* ── BG Grid ── */
        .fs-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 150px 80px;
          pointer-events: none;
          z-index: 0;
        }
        /* white vignette fades on all 4 sides */
     .fs-grid-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  background:
    /* Top blur - full width */
    radial-gradient(
      ellipse 120% 60% at 50% 0%,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0.75) 35%,
      transparent 75%
    ),

    /* Bottom blur - full width */
    radial-gradient(
      ellipse 120% 60% at 50% 100%,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0.75) 35%,
      transparent 75%
    ),

    /* Left blur - full height */
    radial-gradient(
      ellipse 55% 140% at 0% 50%,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0.75) 35%,
      transparent 75%
    ),

    /* Right blur - full height */
    radial-gradient(
      ellipse 55% 140% at 100% 50%,
      rgba(255,255,255,0.95) 0%,
      rgba(255,255,255,0.75) 35%,
      transparent 75%
    );
}
      `}</style>

      <section className="fs-root w-full bg-white px-4 sm:px-6 lg:px-10 relative overflow-x-hidden pt-20 pb-40">
        {/* ── Grid background ── */}
        <div className="fs-grid-bg" />

        <div className="2xl:max-w-5xl max-w-4xl mx-auto relative z-10">
          {/* ══ DESKTOP ══════════════════════════════════════════════ */}
          <div className="hidden lg:block">
            <div className="relative" style={{ minHeight: "600px" }}>
              {/* Main screenshot */}
              <div
                className="absolute left-0 bottom-0 rounded-xl overflow-hidden border border-gray-100"
                style={{
                  width: "100%",
                  boxShadow: "0 16px 60px rgba(0,0,0,0.10)",
                }}
              >
                {!imgFailed ? (
                  <img
                    key={`img-${animKey}`}
                    src={displayFeature.screenshotImage}
                    alt={displayFeature.label}
                    className="img-anim w-full h-full object-cover object-top"
                    style={{ minHeight: "560px" }}
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <SkeletonScreen />
                )}

                {isBlurred && (
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      background: "rgba(245,245,255,0.50)",
                    }}
                  />
                )}
              </div>

              {/* ── Contextual skeleton cards ── */}
              <div
                key={`skeletons-${animKey}`}
                className="absolute inset-0 pointer-events-none"
                style={{ top: 72, zIndex: 15 }}
              >
                {isBlurred ? (
                  <SkeletonDefault />
                ) : (
                  ActiveDesktopSkeleton && <ActiveDesktopSkeleton />
                )}
              </div>

              {/* Agent badge */}
              <div
                className="absolute z-20 transition-all duration-300"
                style={{
                  bottom: "-30px",
                  left: "-60px",
                  opacity: isBlurred ? 0.35 : 1,
                  filter: isBlurred ? "blur(4px)" : "none",
                  pointerEvents: isBlurred ? "none" : "auto",
                }}
              >
                <AgentBadge feature={displayFeature} animKey={animKey} />
                
              </div>

              {/* Explore panel */}
              <div className="absolute -top-14 -right-20 z-30">
                <ExplorePanel active={active} onSelect={handleSelect} />
              </div>
            </div>
          </div>

          {/* ══ MOBILE ═══════════════════════════════════════════════ */}
          <div className="lg:hidden flex flex-col gap-4">
            <div
              className="w-full rounded-2xl relative"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                minHeight: "340px",
                background: "#f5f5ff",
              }}
            >
              <img
                key={`mob-${mobIndex}`}
                src={
                  mobFeature.screenshotImageMobile || mobFeature.screenshotImage
                }
                alt={mobFeature.label}
                className="img-anim w-full object-contain object-top block"
                style={{ minHeight: "340px" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 -z-10">
                <SkeletonScreen />
              </div>
              {typeof MobSkeletonComp === "function" && (
                <MobSkeletonComp feature={mobFeature} />
              )}

              <div className="absolute bottom-3 -left-3 z-20">
                <AgentBadge feature={mobFeature} animKey={mobIndex} />
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 items-center">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobIndex(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === mobIndex ? "20px" : "6px",
                      height: "6px",
                      background:
                        i === mobIndex ? "#6161ff" : "rgba(150,150,200,0.5)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p
                className="text-[12px] font-bold uppercase tracking-widest"
                style={{ color: "#6161ff" }}
              >
                {mobFeature.label.replace("\n", " ")}
              </p>
            </div>

            <button
              className="w-full rounded-full py-3.5 text-[14px] font-semibold text-white flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(90deg,#5b5ef4,#4a4de8)",
                boxShadow: "0 4px 18px rgba(97,97,255,0.35)",
              }}
            >
              Get Started <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
