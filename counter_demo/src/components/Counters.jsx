import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    cnt: 0,
  };
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
        {this.props.counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
