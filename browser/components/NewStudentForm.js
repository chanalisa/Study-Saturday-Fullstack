import React, {Component} from 'react';

export default class NewStudentForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    render () {
        return (
            <div>
            <form>
                <label>
                    First Name:
                    <input type='text' name='firstName' />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type='text' name='lastName' />
                </label>
                <br />
                <label>
                    Email:
                    <input type='text' name='email' />
                </label>
            </form>
            <button>Submit</button>
            </div>
        )
    }
}