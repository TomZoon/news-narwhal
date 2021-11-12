import React from 'react';
import './CardArticle.css';

import {useParams} from "react-router-dom";

const CardArticle = function(props) {

	let params = useParams();


	return (
		<div className='cardArticle'>
			<h2>{params.articleUrl}</h2>
			<img alt="News article" src={ props.article.urlToImage }/>
			<div>{ props.article.title }</div>
		</div>
	);
}

export default CardArticle;
