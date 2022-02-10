import React, { Component } from 'react';
import cseaLogo from '../images/csea-logo.png';

import './landingStardust.css';

export default class LandingStardust extends Component {
	render() {
		return (
			<>
				<div className='landing' id='landing'>
					<a
						className='codepen-promotion'
						target='_blank'
						href='/'
						title="Vortex'22"
					>
						<img
							id='vortex_logo'
							className='codepen-promotion__image'
							src={cseaLogo}
							alt=''
						/>
					</a>

					<div className='title'>
						<h1 id='vortex_title'>VORTEX</h1>
						<h3>
							Stay <strong>Tuned!</strong>
						</h3>
					</div>
				</div>
			</>
		);
	}
}
