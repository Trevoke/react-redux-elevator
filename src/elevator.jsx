import React, { Component } from 'react';

export default class Elevator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsBetweenTwoFloors: 10
    };
  }
  styles () {
    return {
      "margin": "10px",
      "border": "1px solid black",
      "width": "300px",
      "display": "inline-block"
    };
  }

  goToFloor (floorNumber) {
    console.log(floorNumber);
  }

  render () {
    return (
        <div style={this.styles()}>
          <div style={{"marginBottom": "5px"}}>ELEVATOR {this.props.initialName}</div>
          <div className="control-panel">
            <div onClick={this.goToFloor.bind(this, 1)}>FLOOR 1 [X]</div>
            <div onClick={this.goToFloor.bind(this, 2)}>FLOOR 2 [X]</div>
            <div onClick={this.goToFloor.bind(this, 3)}>FLOOR 3 [X]</div>
          </div>
        </div>
    );
  }
}
