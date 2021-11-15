import React from 'react';
import './LoadingNarwhal.css';

import narwhalOutline from "../../images/narwhal-outline.png";

function LoadingNarwhal() {
	return (
		<div className='loadingNarwhal'>
			<div className='loadingText'>
				Loading
				<span className="loaderDot0">.</span>
				<span className="loaderDot1">.</span>
				<span className="loaderDot2">.</span>
			</div>
			<div className='relativeContainer'>
				<img alt="Narwhal loader" className="narwhalOutline" src={ narwhalOutline }/>
			</div>
		</div>
	);
}

export default LoadingNarwhal;
