import React, { Component } from 'react';

class UnControlledForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.pass = event.target.password.value;

    console.log(data);
  };

  render() {
    return (
      <div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-6 offset-3 text-center'>
              <h2>UnControlled Form</h2>'
              <form onSubmit={this.handleSubmit}>
                <input
                  className='form-control mb-3'
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                />
                <input
                  className='form-control mb-3'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                />
                <input
                  className='form-control mb-3'
                  type='password'
                  name='password'
                  placeholder='*****'
                />
                <button type='submit' className='btn btn-warning'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnControlledForm;
