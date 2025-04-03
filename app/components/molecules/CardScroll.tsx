import React from "react";

const HorizontalScrollCard = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="card">
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
