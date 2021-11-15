import React from 'react';
import './CardArticle.css';

import NarwhalImg from '../../images/narwhal.png';

const CardArticle = function(props) {
	function getTimeString(date) {
		return date.getUTCHours() + ":" + addZero(date.getUTCMinutes());
	}

	function addZero(number) {
		return number < 10 ? "0" + number : number;
	}

	function getDateString(date) {
		const length = date.getUTCDate() < 10 ? 12 : 13;
		return date.toUTCString().substr(4, length) + "- " + getTimeString(date);
	}

	function readableTime(date) {
		const publishedAt = new Date(date);
		const now = new Date();

		const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 1000);
		if (diff < 59) {
			return "1 minute ago";
		} else if (diff < 3600) {
			return (Math.floor(diff / 60)) + " minutes ago";
		} else if (diff < 7199) {
			return "1 hour ago";
		} if (diff < 35999) {
			return (Math.floor(diff / 3600)) + " hours ago";
		}

		const dayCheck = new Date();
		dayCheck.setUTCHours(0);
		dayCheck.setUTCMinutes(0);
		dayCheck.setUTCSeconds(0, 0);
		if (dayCheck.getTime() < publishedAt.getTime()) {
			return "Today, " + getTimeString(publishedAt);
		} else if (publishedAt.getTime() - dayCheck.getTime() < 86400000) {
			return "Yesterday, " + getTimeString(publishedAt);
		}

		return getDateString(publishedAt);
	}

	const imgDiv = props.article["urlToImage"] ?
		<img alt="News article" src={ props.article["urlToImage"] }/> :
		<div className="imgPlaceholder">
			<img alt="Placeholder" src={ NarwhalImg }/>
		</div>
	return (
		<div className="cardArticle">
			{imgDiv}
			<div className="textContainer">
				<h4 className="cardArticleTime">{ readableTime(props.article["publishedAt"]) }</h4>
				<h3 className="cardArticleTitle">{ props.article.title }</h3>
			</div>
		</div>
	);
}

export default CardArticle;
