import React, { Component } from 'react';
import { elevatorRequest } from './actions';

export default class Floor extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  styles () {
    return {
      "margin": "10px",
      "display": "inline-block"
    };
  }

  requestElevator() {
    this.props.dispatch(elevatorRequest(this.props.initialLevel));
  }

  render () {
    return (
        <div className="floor" style={this.styles()}>FLOOR &nbsp;
          <span>{this.props.initialLevel}</span>
          <button onClick={this.requestElevator.bind(this)}>Request Elevator</button>
        </div>
    );
  }
}
