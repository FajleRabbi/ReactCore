import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormRadio from './FormRadio';

const Form = ({
  handleSubmit,
  handleChange,
  values,
  handleAgreement,
  agreement,
}) => (
  <form onSubmit={handleSubmit}>
    <FormInput
      name='name'
      label='Name'
      placeholder='Enter your name'
      value={values.name}
      onChange={handleChange}
    />

    <FormInput
      name='email'
      label='Email'
      type='email'
      placeholder='Enter your email'
      value={values.email}
      onChange={handleChange}
    />

    <FormInput
      name='password'
      label='Password'
      type='password'
      placeholder='Enter your password'
      value={values.password}
      onChange={handleChange}
    />
    <FormInput
      name='birthday'
      label='Birth Day'
      type='date'
      value={values.birthday}
      onChange={handleChange}
    />
    <FormRadio value={values.gender} onChange={handleChange} />

    <div className='form-check mt-3'>
      <input
        type='checkbox'
        name='agreement'
        className='form-check-input'
        id='agreement'
        value={agreement}
        onChange={handleAgreement}
      />
      <label htmlFor='agreement'>
        I agree to the all of terms and conditions
      </label>
    </div>

    <button
      type='submit'
      name='submit'
      class='btn btn-warning mt-3'
      onChange={handleSubmit}
      disabled={!agreement}>
      Submit
    </button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  agreement: PropTypes.bool.isRequired,
};
export default Form;
