import React, { Component } from "react";
import Burger from "./burger";
import Quote from "./quote";
import Yinandyang from "./yinandyang";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Yinandyang trueorfalse={false} />
        <Burger
          topbun={true}
          lettuce={true}
          tomato={true}
          cheese={true}
          patty={true}
          bottbun={true}
        />
        <Quote quote="You shall not paaasss!!" />
      </div>
    );
  }
}
