import React, { Component } from 'react'
import axios from 'axios'

export default class SmurfsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: null,
      height: "",
      id: ""
    };

  };

 handleChanges = e => {
  e.preventDefault()
  this.setState({
  [e.target.name]: e.target.value
  })
}


  submitForm = e => {
    e.preventDefault()
    const newSmurf = {
      name: this.state.name,
      age:Number(this.state.age),
      height: this.state.height,
      id: Date.now()
    }
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then (response => {
      console.log('New Smurf Added: ', response.data);
    })
    .catch (error => {
      console.log('Error in Adding Smurf: ', error)
    })
    window.location.reload()
  }




  render() {
    return (
      <div>
      <h1>Add a New Smurf</h1>
      <form onSubmit={this.submitForm}>
        <input
        placeholder="Enter Smurf's Name"
        type="text"
        value={this.state.name}
        name="name"
        onChange={this.handleChanges} />

        <input
        placeholder="Enter Smurf's Age"
        type="number"
        value={this.state.age}
        name="age"
        onChange={this.handleChanges}/>

        <input
        placeholder="Enter Smurf's Height in cm."
        type="number"
        value={this.state.height}
        name="height"
        onChange={this.handleChanges}/>

        <button type="submit">Join the Village</button>
      </form>

      </div>
    )
  }
}
