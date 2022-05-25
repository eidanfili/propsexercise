import React from "react";

// const props = {
//   bottbun: false,
//   patty: false,
//   cheese: false,
//   lettuce: false,
//   tomato: false,
//   topbun: false,
// };

export default function Burger(props) {
  const logr = () => {
    console.log(props);
  };

  return (
    <div className="plate cont">
      {logr()}
      <h2 className="LOUDBURGER">BURGER!</h2>
      <div className="burger">
        <div className="bun"></div>
        <div className="lettuce"></div>
        <div className="tomato"></div>
        <div className="cheese"></div>
        <div className="patty"></div>
        <div className="bun"></div>
      </div>
    </div>
  );
}
