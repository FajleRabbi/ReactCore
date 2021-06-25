import { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div className='section-profile'>
				<div className='profile-content'>
					<h1 className='name'>
						<span className='name__first'>Fajle Rabbi </span>
						<span className='name__last'>Siddique</span>
					</h1>
				</div>
				<div className='profile-image'>
					<img src='./dogs.jpg' alt='' />
				</div>
			</div>
		);
	}
}

export default Profile;
