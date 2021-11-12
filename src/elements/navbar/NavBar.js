import React from 'react';
import './NavBar.css';

import Narwhal from '../../images/narwhal-accent.png';
import {Link} from "react-router-dom";

function NavBar() {
	return (
		<div className='navBar'>
			<Link to="/" className="mainLogo">
				<img alt="Narwhal Icon" src={ Narwhal }/>
				News Narwhal
			</Link>

			<Link className="aboutLink" to="/about">About</Link>
		</div>
	);
}

export default NavBar;
