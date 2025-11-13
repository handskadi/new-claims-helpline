// components/WaitTimeIndicator.tsx
import React from "react";

interface WaitTimeIndicatorProps {
  textColor?: string;
}

const WaitTimeIndicator: React.FC<WaitTimeIndicatorProps> = ({ 
  textColor = 'inherit' 
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        {/* Static dot */}
        <div className="w-2 h-2 bg-[#2563EB] rounded-full" />

        {/* Pulsing background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <div className="w-4 h-4 bg-[#2563EB]/35 rounded-full" />
        </div>
      </div>
      <span className="text-sm mt-0.5" style={{ color: textColor }}>
        Estimated wait time: <span className="font-bold">under 3 minutes</span>
      </span>
    </div>
  );
};

export default WaitTimeIndicator;