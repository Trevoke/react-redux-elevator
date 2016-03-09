import React, { Component } from 'react';
import Building from './building';
import EventLog from './event-log';
import Simulation from './simulation';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div style={{width: "800px"}}>
        <Building dispatch={this.props.dispatch}/>
        <Simulation />
        <EventLog />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return state || {};
}

export default connect(mapStateToProps)(App);
