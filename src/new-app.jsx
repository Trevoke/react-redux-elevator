import React, { Component } from 'react';
import Building from './building';
import EventLog from './event-log';
import Simulation from './simulation';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    console.log('APP!', props);
    super(props);
  }

  render () {
    // Pass elements in from store/props here?
    return (
      <div style={{width: "800px"}}>
        <Building store={this.props.store} dispatch={this.props.dispatch}/>
        <Simulation store={this.props.store} />
        <EventLog store={this.props.store} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return state || {};
  // console.log(state);
  // const { log } = state;
  // return { log: log };
}

export default connect(mapStateToProps)(App);
