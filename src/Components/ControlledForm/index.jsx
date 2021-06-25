import React, { Component } from 'react';
import Form from './Form'
class Controlled extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-6 offset-3'>
              <h2 className='text-center'>Controlled Form</h2>
              <Form
                values={this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controlled;
