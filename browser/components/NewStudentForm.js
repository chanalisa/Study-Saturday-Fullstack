import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component {
    constructor () {
        super ();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target)
        const newStudent = {
            firstName: event.target.firstName,
            lastName: event.target.lastName,
            email: event.target.email
        }
        async axios.post('/', {newStudent}) {
            await Student.create(res.data)
        }
        
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
