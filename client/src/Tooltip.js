import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible && (
        <div
          className="absolute bg-[#107359] whitespace-nowrap text-white text-sm py-2 px-4 rounded z-10"
          style={{
            top: "-65%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
