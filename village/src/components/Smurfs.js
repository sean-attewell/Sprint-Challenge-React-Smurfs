import React, { Component } from 'react';
import Smurf from './Smurf';
import './Smurfs.css';

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h2>Smurf Village</h2>
        <div className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
