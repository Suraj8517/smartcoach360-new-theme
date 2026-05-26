import { useState } from "react";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="8" fill="#F0F0F0"/>
    <path d="M5 8l2 2 4-4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const featureItems = [
  "Manage leads & prospects",
  "Track client progress",
  "Create nutrition plans",
  "Build workout programs",
  "Accept payments online",
  "Engage via chats & reminders",
  "View reports & insights",
  "Control access & security",
];

const plans = [
  {
    name: "Starter",
    price: "4,999",
    subUnit: "month",
    seatsNote: "Upto 25 clients",
    ctaLabel: "Get Started",
    ctaFilled: true,
    popular: false,
  },
  {
    name: "Starter Plus",
    price: "8,999",
    subUnit: "month",
    seatsNote: "Upto 50 clients",
    ctaLabel: "Get Started",
    ctaFilled: true,
    popular: false,
  },
  {
    name: "Growth",
    price: "15,999",
    subUnit: "month",
    seatsNote: "Upto 100 clients",
    ctaLabel: "Get Started",
    ctaFilled: true,
    popular: false,
  },
  {
    name: "Growth Plus",
    price: "25,999",
    subUnit: "month",
    seatsNote: "Upto 200 clients",
    ctaLabel: "Get Started",
    ctaFilled: true,
    popular: true,
  },
  {
    name: "Pro",
    price: "49,000",
    subUnit: "month",
    seatsNote: "Upto 500 Clients",
    ctaLabel: "Get Started",
    ctaFilled: true,
    popular: false,
  },
];

/* ── Vertical plan card ── */
function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-xl border overflow-hidden h-full ${
        plan.popular ? "border-[#1a1a2e]" : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <div className="bg-[#1a1a2e] text-white text-xs font-semibold text-center py-2 tracking-wide">
          Most Popular
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-900 pb-2">{plan.name}</h2>

        {plan.price ? (
          <div className="flex items-start gap-1">
            <span className="text-3xl font-thin text-gray-900 leading-none mt-1">₹</span>
            <span className="text-4xl font-extrabold text-gray-900 leading-none">{plan.price}</span>
            <div className="flex flex-col ml-1 mt-3">
              <span className="text-sm text-gray-500 leading-tight">/{plan.subUnit}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-400 italic">Custom pricing</span>
          </div>
        )}

        {plan.seatsNote && (
          <p className="font-bold text-sm text-gray-900 mt-4">{plan.seatsNote}</p>
        )}

        <Link
          to="/contact-us"
          className={`mt-2 block text-center w-full rounded-full py-2.5 text-sm font-semibold transition-colors ${
            plan.ctaFilled
              ? "bg-gradient-to-r from-purple-600 via-violet-600 to-violet-600 text-white shadow-lg shadow-purple-200 hover:-translate-y-px hover:shadow-purple-300"
              : "border border-purple-600 bg-white text-purple-600 hover:bg-purple-50"
          }`}
        >
          {plan.ctaLabel}
        </Link>
      </div>

      <div className="border-t border-gray-200 mx-5" />

      <div className="p-5 flex flex-col gap-2">
        <p className="text-sm font-bold text-gray-900 mb-1">Features includes:</p>
        <ul className="flex flex-col gap-6">
          {featureItems.map((item) => (
            <li key={item} className="flex items-center justify-between text-sm text-gray-700">
              <span>{item}</span>
              <CheckIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Reusable horizontal card ── */
function HorizontalCard({ title, badge, seatsNote, ctaLabel, ctaFilled = false }) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#141428] via-[#1c1c3a] to-[#25254d] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#7c7cff] shadow-[0_0_12px_rgba(124,124,255,0.8)]" />
          <span className="text-sm font-semibold tracking-wide text-white">{title}</span>
        </div>

        {badge && (
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="relative flex w-full shrink-0 flex-col justify-between border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white p-7 lg:w-[320px] lg:border-b-0 lg:border-r">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>

            <div className="mt-5">
              <span className="bg-gradient-to-r from-[#5b5bd6] to-[#7c7cff] bg-clip-text text-4xl font-extrabold text-transparent">
                Custom
              </span>
              <p className="mt-1 text-sm text-gray-500">Tailored pricing for your business</p>
            </div>

            {seatsNote && (
              <div className="mt-5 inline-flex rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">
                {seatsNote}
              </div>
            )}
          </div>

          <Link
            to="/contact-us"
            className={`mt-8 block text-center w-full rounded-2xl py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
              ctaFilled
                ? "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-200 hover:-translate-y-px hover:shadow-purple-300"
                : "border border-purple-600 bg-white text-purple-600 hover:bg-purple-50"
            }`}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-7">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Everything Included</h3>
              <p className="mt-1 text-sm text-gray-500">Premium features designed for scaling teams</p>
            </div>
            <div className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 sm:flex">
              Full Access
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featureItems.map((item) => (
              <li
                key={item}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-3 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-sm"
              >
                <span className="text-sm font-medium text-gray-700">{item}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <CheckIcon />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const gridPlans = plans.filter((p) => p.name !== "Pro");
const ProPlan = plans.find((p) => p.name === "Pro");

export default function PricingTable() {
  return (
    <div className="bg-white min-h-screen px-4 pb-36">
      <div className="2xl:max-w-[1600px] max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {gridPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}

          {/* Pro as 5th column — 2xl only */}
          <div className="hidden 2xl:block">
            <PlanCard plan={ProPlan} />
          </div>
        </div>

        {/* Pro as horizontal — below 2xl */}
        <div className="2xl:hidden">
          <HorizontalCard
            title="Pro"
            badge={null}
            seatsNote={ProPlan.seatsNote}
            ctaLabel={ProPlan.ctaLabel}
            ctaFilled={ProPlan.ctaFilled}
          />
        </div>

        {/* Enterprise — always shown */}
        <HorizontalCard
          title="Enterprise"
          badge="Special Pricing"
          seatsNote="More than 500 clients"
          ctaLabel="Get a quote"
          ctaFilled={false}
        />

      </div>
    </div>
  );
}