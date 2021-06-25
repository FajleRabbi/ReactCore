import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => (
  <div className='form-group'>
    <label className='mb-1' htmlFor={props.name}>
      {props.label}
    </label>
    <input
      className='form-control mb-3'
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

// Prop types
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
FormInput.defaultProps = {
  type: 'type',
  placeholder: '',
  label: '',
};

export default FormInput;
