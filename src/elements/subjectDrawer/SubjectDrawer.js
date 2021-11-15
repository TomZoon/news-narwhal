import React from 'react';
import './SubjectDrawer.css';

import {Link} from "react-router-dom";
import narwhalOutlineSmall from "../../images/narwhal-outline-small.png";

const SubjectDrawer = function(props) {
	function getSelectedClass(sub, subject) {
		return (sub === subject) ? "subjectDrawerLinkSelected" : "";
	}

	function getDrawerOpenClass(open) {
		return open ? "subjectDrawerOpen" : "";
	}

	return (
		<div className={`subjectDrawer ${ getDrawerOpenClass(props.drawerOpen) }`}>
			{props.subjects.map((subject) => (
				<div className="subjectDrawerItem" key={subject}>
					<img
						alt="Selected icon"
						className={`subjectDrawerImg ${ getSelectedClass(subject, props.subject)}`}
						src={narwhalOutlineSmall}
					/>

					<Link
						className={`subjectDrawerLink ${ getSelectedClass(subject, props.subject)}`}
						to={`${ encodeURIComponent(subject) }`}>
						{subject}
					</Link>
				</div>
			))}
		</div>
	);
}

export default SubjectDrawer;
