import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => (
  <div className='form-group mb-2'>
    <label className='mb-2' htmlFor={props.name}>
      {props.label}
    </label>
    <input
      type={props.type}
      className='form-control mb-3'
      name={props.name}
      id={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
};
export default FormInput;
