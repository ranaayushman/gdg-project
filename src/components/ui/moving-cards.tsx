import React from "react";

interface Card {
  title: string;
  description: string;
  link?: string;
  icon?: React.JSX.Element;
}

interface MovingCardsProps {
  items: Card[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
}

const MovingCards = ({
  items,
  direction = "right",
  speed = "medium",
}: MovingCardsProps) => {
  const speedClass = {
    slow: "animate-[slide_250s_linear_infinite]",
    medium: "animate-[slide_150s_linear_infinite]",
    fast: "animate-[slide_100s_linear_infinite]",
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex gap-4 ${
          direction === "right" ? speedClass[speed] : `${speedClass[speed]} flex-row-reverse`
        }`}
      >
        {/* Double the items to create seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              {item.icon && (
                <div className="mb-3 text-slate-900 dark:text-white">
                  {item.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingCards;