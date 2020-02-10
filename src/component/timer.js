import React, { Component } from "react";
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      timer: 0,
      second: 0,
      minute: 0,
      hour: 0
    };
    setInterval(
      () => {
        if (this.state.start) {
          this.setState({ timer: this.state.timer + 1 });
        }
        this.convert(this.state.timer);
      },

      1000
    );
  }
  convert = timer => {
    this.setState({
      hour: Math.floor(timer / 3600),
      minute: Math.floor((timer - this.state.hour * 3600) / 60),
      second: timer - this.state.hour * 3600 - this.state.minute * 60
    });
  };
  startBtn = () => {
    this.setState({ start: !this.state.start });
  };
  resetBtn = () => {
    this.setState({
      timer: 0,
      second: 0,
      minute: 0,
      hour: 0,
      start: false
    });
  };
  render() {
    return (
      <div className="BigBloc">
        <div className="BigBloc1">
          <span>{String(this.state.hour).padStart(2, "0")} :</span>
          <span>{String(this.state.minute).padStart(2, "0")} :</span>
          <span>{String(this.state.second).padStart(2, "0")}</span>
        </div>
        <div className="BigBloc3">
          <h2>HH :</h2>
          <h2>MM :</h2>
          <h2>SS</h2>
        </div>
        <div className="BigBloc2">
          <button className="btnS" onClick={this.startBtn}>
            {this.state.start ? "STOP" : "START"}
          </button>
          <button className="btnR" onClick={this.resetBtn}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}
