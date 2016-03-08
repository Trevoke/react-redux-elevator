import React, { Component } from 'react';
import Floor from './floor';
import Elevator from './elevator';

export default class Building extends Component {
  constructor(props) {
    super(props);
  }
  styles () {
    return {
      "border": "2px solid black"
    };
  }
  render () {
    return (
      <div className="building" style={this.styles()}>
        <div className="floors">
          <Floor initialLevel="1" dispatch={this.props.dispatch} />
          <Floor initialLevel="2" dispatch={this.props.dispatch} />
          <Floor initialLevel="3" dispatch={this.props.dispatch} />
        </div>
        <div className="elevators">
          <Elevator initialName="1" />
          <Elevator initialName="2" />
        </div>
      </div>
    );
  }
}
