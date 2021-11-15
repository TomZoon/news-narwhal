import React from 'react';
import './NavBar.css';

import {Link} from "react-router-dom";

import Narwhal from '../../images/narwhal-accent.png';
import BurgerMenuIcon from '../../images/icon-burger-menu.svg';

const NavBar = function(props) {
	return (
		<div className='navBar'>
			<div className="navBarContent">
				<button onClick={ props.toggleDrawer } className="burgerMenuIcon">
					<img alt="Burger menu" src={ BurgerMenuIcon }/>
				</button>

				<Link to="/" className="mainLogo" onClick={ props.closeDrawer }>
					<img alt="Narwhal Icon" src={ Narwhal }/>
					News Narwhal
				</Link>

				<Link className="aboutLink" to="/about" onClick={ props.closeDrawer }>About</Link>
			</div>
		</div>
	);
}

export default NavBar;
