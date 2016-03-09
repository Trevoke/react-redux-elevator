import React, { Component } from 'react';
import { connect } from 'react-redux';

const EventLog = ({ log }) => (
  <div>
    {log.map(logEntry =>
             <div>{logEntry}</div>
    )}
  </div>
);

function mapStateToProps(state) {
  return { log: state.reducer.log };
}

export default connect(mapStateToProps)(EventLog);

// export default class EventLog extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }

//   render () {
//     return (
//         <div>
//           {this.props.log.map(logEntry => <div>{logEntry}</div>)}
//         </div>
//     );
//   }
// }
