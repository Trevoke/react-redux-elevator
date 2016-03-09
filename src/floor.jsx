import React, { Component } from 'react';
import { elevatorRequest } from './actions';
import { connect } from 'react-redux';

class Floor extends Component {
  constructor(props) {
    super(props);
  }

  styles () {
    return {
      "margin": "10px",
      "display": "inline-block"
    };
  }

  requestElevator() {
    this.props.dispatch(elevatorRequest(this.props.initialLevel, new Date()));
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Floor);
