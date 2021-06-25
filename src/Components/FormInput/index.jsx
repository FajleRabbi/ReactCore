import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css';

class FormInput extends Component {
	state = {
		name: '',
		country: '',
		bio: '',
		birthday: '',
		gender: '',
		agree: false,
		skills: [],
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleAgreeCheckbox = (event) => {
		this.setState({
			agree: event.target.checked,
		});
	};

	handleCheckBoxes = (event) => {
    if(event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value]
      })
    } else {
      const skills = this.state.skills.filter(skill => {
        return skill !== event.target.value
      })
      this.setState({
        skills
      })
    }
  };

	render() {
		const { name, country, bio, birthday, agree, skills } = this.state;
		return (
			<div className='form-input'>
				<div className='container'>
					<div className='row'>
						<div className='col-6 offset-3 my-5'>
							<div className={`${styles.form}`}>
								<div className='heading text-center mb-3'>
									<h1>Submit your information!</h1>
								</div>
								<input
									className='form-control mb-2'
									type='text'
									name='name'
									placeholder='Enter your name...'
									onChange={this.handleChange}
									value={name}
								/>
								<select
									className='form-control mb-2'
									name='country'
									onChange={this.handleChange}
									value={country}>
									<option>Select your country!</option>
									<option value='Bangladesh'>Bangladesh</option>
									<option value='India'>India</option>
									<option value='Srilanka'>Srilanka</option>
									<option value='Pakistan'>Pakistan</option>
								</select>
								<input
									type='date'
									name='birthday'
									value={birthday}
									onChange={this.handleChange}
									className='form-control mb-2'
								/>
								<textarea
									className='mb-3 form-control mb-2'
									placeholder='Write about yourself!'
									name='bio'
									onChange={this.handleChange}
									value={bio}
								/>

								<div>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='radio'
											name='gender'
											id='Male'
											value='Male'
											onChange={this.handleChange}
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
											id='Female'
											onChange={this.handleChange}
											value='Female'
										/>
										<label className='form-check-label' htmlFor='Female'>
											Female
										</label>
									</div>
								</div>

								<div>
									<strong className='mt-3 mb-2' style={{ display: 'block' }}>
										Skills:
									</strong>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='javaScript'
											name='skills'
											value='JavaScript'
											onChange={this.handleCheckBoxes}
											checked={skills.includes('JavaScript')}
										/>
										<label className='form-check-label' htmlFor='javaScript'>
											JavaScript
										</label>
									</div>

									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='WordPress'
											name='skills'
											value='WordPress'
											onChange={this.handleCheckBoxes}
											checked={skills.includes('WordPress')}
										/>
										<label className='form-check-label' htmlFor='WordPress'>
											WordPress
										</label>
									</div>

									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id='PHP'
											name='skills'
											value='PHP'
											onChange={this.handleCheckBoxes}
											checked={skills.includes('PHP')}
										/>
										<label className='form-check-label' htmlFor='PHP'>
											PHP
										</label>
									</div>
								</div>

								<div>
									<div className='form-check mt-4'>
										<input
											className='form-check-input'
											type='checkbox'
											id='agree'
											onChange={this.handleAgreeCheckbox}
											checked={agree}
											name='agree'
										/>
										<label className='form-check-label' htmlFor='agree'>
											I agree all the terms and conditions.
										</label>
									</div>
								</div>

								<button
									onClick={() => console.log(this.state)}
									className='mt-3 btn btn-warning'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FormInput;
