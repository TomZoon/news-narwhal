import React from 'react';
import './FullArticle.css';

const FullArticle = function(props) {
	console.log(props.article);

	function readableTime(date) {
		const dateObj = new Date(date);
		return dateObj.toUTCString();
	}

	let authorDiv = props.article.author ?
		<div>
			{ props.article.author }
			<span className="dot">•</span>
		</div> : "";

	return (
		<div className='fullArticle'>
			<div className='topBar'>
				<div>{ readableTime(props.article["publishedAt"]) }</div>
				<span className="dot">•</span>
				{ authorDiv }
				<div>{ props.article.source.name }</div>
			</div>

			<h2>{ props.article.title }</h2>

			<img alt="News article" src={ props.article["urlToImage"] }/>

			<div className="description">{ props.article.description }</div>
			<br/>
			<div className="content">{ props.article.content }{ props.article.content }
				<br/><br/>{ props.article.content }{ props.article.content }{ props.article.content }{ props.article.content }
				<br/><br/>{ props.article.content }{ props.article.content }{ props.article.content }
				<br/><br/>{ props.article.content }{ props.article.content }</div>
		</div>
	);
}

export default FullArticle;
