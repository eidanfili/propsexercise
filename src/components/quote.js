import React, { useState } from "react";

// const props = {
//     quote:"a marvelous quote!"
// }

export default function Quote(props) {
  const [quote, setTitle] = useState("click button to show quote");

  const logr = () => {
    console.log(props);
  };
  return (
    <div className="cont keyframeexmpl">
      {logr()}
      <h4>{quote}</h4>
      <button onClick={() => setTitle(props.quote)}>Update State</button>
    </div>
  );
}
