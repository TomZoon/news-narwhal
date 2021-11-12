import React from 'react';
import './SubjectDrawer.css';

const SubjectDrawer = function(props) {
	function handler(e) {
		props.onSelectSubject("koe");
	}

	return (
		<div className='subjectDrawer'>
			<button onClick={handler}>Everything</button>
		</div>
	);
}

export default SubjectDrawer;
