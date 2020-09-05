import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    temperature: 10,
  };
  increaseTemperature = () => {
    if (this.state.temperature <= 29)
      this.setState({ temperature: this.state.temperature + 1 });
  };
  decreaseTemperature = () => {
    if (this.state.temperature >= 1)
      this.setState({ temperature: this.state.temperature - 1 });
  };
  getClasses = () => {
    let classes = "temperature-display ";
    classes += this.state.temperature >= 15 ? "hot" : "cold";
    return classes;
  };
  render() {
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={this.getClasses()}>{this.state.temperature}°C</div>
        </div>
        <div className="button-container">
          <button onClick={this.increaseTemperature}>+</button>
          <button onClick={this.decreaseTemperature}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
