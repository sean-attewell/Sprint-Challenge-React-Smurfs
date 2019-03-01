import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

const smurfsURL = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: null,
      smurfsURL: smurfsURL,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.fetchSmurfs();
  }

  // CRUD OPERATIONS

  fetchSmurfs = () => {
    this.resetError();
    axios.get(smurfsURL)
      .then(res => this.setSmurfs(res.data))
      .catch(this.setError);
  }
  
  postSmurfs = (name, age, height) => {
    this.resetError();
    axios.post(smurfsURL, { name, age, height })
    .then(res => this.setSmurfs(res.data))
    .catch(this.setError)
  }

  // STATE MANAGEMENT

  setSmurfs = smurfs => {
    console.log(smurfs);
    this.setState({ smurfs });
  }

  setError = error => {
    this.setState({ error });
  }

  resetError = () => {
    this.setState({ error: null });
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <Route 
          exact
          path='/' 
          render={(pr) => (
            <Smurfs
              smurfs={this.state.smurfs}
              {...pr}
            />
          )} 
        />
        
        <Route 
          path='/smurf-form' 
          render={(pr) => (
            <SmurfForm
              postSmurfs={this.postSmurfs}
              {...pr}
            />
          )} 
        />


        {/* <Route path='/about' component={About} /> */}

        {/* <SmurfForm 
        postSmurfs={this.postSmurfs}
        // resetError={this.resetError}
        // setSmurfs={this.setSmurfs}
        // setError={this.setError}
        // smurfsURL={this.smurfsURL}
        /> */}

        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
