export const AgentBadge = ({ feature, animKey }) => {
  const { AgentStatIcon } = feature;
  return (
    <div
      key={`badge-${animKey}`}
      className="inline-flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-2.5 pr-4"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
        animation: "slideUp 0.38s cubic-bezier(.22,1,.36,1) 0.1s both",
      }}
    >
      <div
        className={`w-[72px] h-[72px] rounded-xl shrink-0 bg-gradient-to-br ${feature.agentColor} flex items-center justify-center text-xl`}
      >
        <img src={feature.agentImage} alt={feature.agentName} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div>
        <p className="text-[16px] font-bold text-gray-900 mb-1">
          {feature.agentName}
        </p>
        <div className="flex items-center gap-1.5">
          <AgentStatIcon size={14} className="text-gray-400 shrink-0" />
          <span className="text-[14px] text-gray-500">{feature.agentStat}</span>
        </div>
      </div>
    </div>
  );
};