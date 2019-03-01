import React, { Component } from 'react';
import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // this.props.resetError();

    // axios.post(this.props.smurfsURL, { name: this.state.name, age: this.state.age, height: this.state.height })
    //   .then(res => this.props.setSmurfs(res.data))
    //   .catch(this.props.setError)

    this.props.postSmurfs(this.state.name, this.state.age, this.state.height)

    this.setState({ // clears out state after
      name: '',
      age: '',
      height: ''
    });

    // window.history.pushState(null, null, '/')
    window.history.go(-1)

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="SmurfForm">Enter a new smurf:</h2>
        <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              className="inputClass"
              onChange={this.handleInputChange}
              placeholder="Name"
              value={this.state.name}
              name="name"
              type="add"
            />
            <input
              className="inputClass"
              onChange={this.handleInputChange}
              placeholder="Age"
              value={this.state.age}
              name="age"
              type="add"
            />
            <input
              className="inputClass"
              onChange={this.handleInputChange}
              placeholder="Height"
              value={this.state.height}
              name="height"
              type="add"
            />
            <button className="buttonClass" type="submit">Add to the village</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SmurfForm;
