import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FromInput';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <FormInput
      name='name'
      label='Name'
      placeholder='Enter your name'
      type='text'
      value={props.values.name}
      onChange={props.handleChange}
    />

    <FormInput
      name='email'
      label='Email'
      placeholder='Enter your email'
      type='email'
      value={props.values.email}
      onChange={props.handleChange}
    />

    <FormInput
      name='password'
      label='Password'
      placeholder='Enter your passwrod'
      type='password'
      value={props.values.password}
      onChange={props.handleChange}
    />
    <button type='submit' className='btn btn-warning'>
      Submit
    </button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
