import React, { Component } from 'react';
import Form from './Form';

const initValues = {
  name: '',
  email: '',
  password: '',
  gender: '',
  birthday: '',
};

class SignUp extends Component {
  state = {
    values: initValues,
    agreement: false,
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({
      agreement: event.target.checked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, isValid } = this.validate();
    if (isValid) {
      console.log(this.state.values);

      event.target.reset();
      this.setState({
        values: initValues,
        agreement: false,
      });
    } else {
      console.log(errors)
    }
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, password, gender, birthday },
    } = this.state;

    if (!name) {
      errors.name = 'Please provide your name';
    }
    if (!email) {
      errors.email = 'Please provide your email';
    }
    if (!password) {
      errors.password = 'Please provide your password';
    }
    if (!birthday) {
      errors.birthday = 'Please provide your birthday';
    }
    if (!gender) {
      errors.gender = 'Please select your gender';
    }

    return {
      errors,
      isValid: Object.keys(errors) === 0,
    };
  };

  render() {
    return (
      <div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-6 offset-3'>
              <h3>Sign up here</h3>
              <Form
                handleAgreement={this.handleAgreement}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                values={this.state.values}
                agreement={this.state.agreement}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
