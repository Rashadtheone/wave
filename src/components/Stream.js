import React from 'react';
import { connect } from 'react-redux'

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

//identify redux as a supplier for data for use. while the component doesn't change at all.
//mapStateToProps returns a substate of our global scope supplying only the data this component needs
//we can access different properties of the global scope using <Stream something={thing} />
function mapStatetoProps(state) {
    const tracks = state.track;
    return {
        tracks
    }
}

export default connect(mapStatetoProps)(Stream);

//stateless component doesn't have any lifecycle methods, just shows data.