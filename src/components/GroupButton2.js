import React from "react";

const GroupButton2 = ({ names, onButtonClick }) => {
  return (
    <div>
      {names.map((n) => (
        <button
          onClick={() => {
            onButtonClick(n.name);
          }}
        >
          {n.name}
        </button>
      ))}
    </div>
  );
};

export default GroupButton2;
