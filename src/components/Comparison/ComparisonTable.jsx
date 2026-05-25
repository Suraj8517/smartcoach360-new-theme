import { useState } from "react";

const features = [
  { name: "Custom workout programs", sc360: true, truecoach: true, mindbody: false, ptdistinction: true },
  { name: "Nutrition & macro tracking", sc360: true, truecoach: false, mindbody: false, ptdistinction: true },
  { name: "In-app messaging", sc360: true, truecoach: true, mindbody: false, ptdistinction: true },
  { name: "Automated messaging", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Payment processing", sc360: true, truecoach: true, mindbody: true, ptdistinction: true },
  { name: "Session packs & discounts", sc360: true, truecoach: true, mindbody: true, ptdistinction: true },
  { name: "Multi-coach management", sc360: true, truecoach: false, mindbody: true, ptdistinction: false },
  { name: "Multi-branch support", sc360: true, truecoach: false, mindbody: true, ptdistinction: false },
  { name: "Auto lead allocation", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Role & access management", sc360: true, truecoach: false, mindbody: true, ptdistinction: false },
  { name: "Client challenges & gamification", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Female health tracker", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Apple Health / Google Fit sync", sc360: true, truecoach: false, mindbody: false, ptdistinction: true },
  { name: "Lab integration", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "WhatsApp integration", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "SSO for enterprises", sc360: true, truecoach: false, mindbody: true, ptdistinction: false },
  { name: "Dedicated success manager", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Personalised onboarding", sc360: true, truecoach: false, mindbody: false, ptdistinction: false },
  { name: "Mobile app (iOS & Android)", sc360: true, truecoach: true, mindbody: true, ptdistinction: true },
];

const columns = [
  { key: "sc360", label: "SmartCoach360", highlight: true },
  { key: "truecoach", label: "TrueCoach", highlight: false },
  { key: "mindbody", label: "Mindbody", highlight: false },
  { key: "ptdistinction", label: "PTDistinction", highlight: false },
];

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#EEEDFE]">
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#534AB7" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const CrossIcon = () => (
  <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-gray-100">
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d1d5db" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </span>
);



export default function ComparisonTable() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 ">

      {/* Section label */}
      <div className="text-[13px] font-medium text-gray-900 pb-2.5 border-b border-gray-200 mb-0">
        Feature comparison
      </div>

      <table className="w-full border-collapse table-fixed">
        <colgroup>
          <col className="w-[40%]" />
          <col className="w-[15%]" />
          <col className="w-[15%]" />
          <col className="w-[15%]" />
          <col className="w-[15%]" />
        </colgroup>

        <thead>
          <tr>
            <th className="py-3.5 text-left border-b border-gray-200" />
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3.5 px-1.5 text-center border-b border-gray-200 text-xs font-medium"
              >
                {col.highlight ? (
                  <span className="inline-block bg-[#EEEDFE] border border-[#AFA9EC] rounded-full px-3 py-[3px] text-[11px] font-medium text-[#3C3489]">
                    {col.label}
                  </span>
                ) : (
                  <span className="text-gray-500">{col.label}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((feature, i) => (
            <tr
              key={feature.name}
              className={`group`}
            >
              <td className="py-3 pr-4">
                <div className="flex items-center gap-1.5 text-[13px] text-gray-900">
                  <span>{feature.name}</span>
                </div>
              </td>
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-1.5 text-center align-middle">
                  {feature[col.key] ? <CheckIcon /> : <CrossIcon />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}