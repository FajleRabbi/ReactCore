import React from 'react';

const FormRadio = (props) => {
  return (
    <React.Fragment>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='gender'
          value='Male'
          id="Male"
          onChange={props.onChange}
        />
        <label className='form-check-label' htmlFor='Male'>
          Male
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='gender'
          value='Female'
          id="Female"
          onChange={props.onChange}
        />
        <label className='form-check-label' htmlFor='Female'>
          Female
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='gender'
          value='Other'
          id='Other'
          onChange={props.onChange}
        />
        <label className='form-check-label' htmlFor='Other'>
          Other
        </label>
      </div>
    </React.Fragment>
  );
};

export default FormRadio;
