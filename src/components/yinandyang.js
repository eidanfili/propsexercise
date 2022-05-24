import React from "react";

export default function Yinandyang(props) {
  const logr = () => {
    console.log(props);
  };
  return (
    <div>
      {logr()}
      {props.trueorfalse ? <h1>it was true</h1> : <h1>it was false</h1>}
    </div>
  );
}
