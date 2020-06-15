import React from "react";

const Rainbow = (WrappedComponent) => {
  const color = ["yellow", "blue", "purple", "green", "red", "pink", "brown"];
  const randomColor = color[Math.floor(Math.random() * 6)];
  const colorClass = randomColor + "-text";

  return (props) => {
    return (
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
