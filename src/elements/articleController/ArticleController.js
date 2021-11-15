import React from "react";
import './ArticleController.css';

import CardArticle from "../cardArticle/CardArticle";
import {Link} from "react-router-dom";
import FullArticle from "../fullArticle/FullArticle";
import LoadingNarwhal from "../loadingNarwhal/LoadingNarwhal";

export class ArticleController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			articles: []
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.subject !== this.props.subject) {
			console.log('Changing subject:', this.props.subject);
			this.loadArticles(this.props.subject);
		}
	}

	componentDidMount() {
		this.loadArticles(this.props.subject);
	}

	loadArticles(subject) {
		// Handle the everything subject.
		const subjectQuery = (subject === "all") ? "*" : subject;

		let storedNews = JSON.parse(localStorage.getItem('articles'));
		if (!storedNews) {
			storedNews = {};
		}

		const millis = new Date().getTime();
		if (storedNews && storedNews[subject] && storedNews[subject].time > (millis - 600000)) {
			console.log("Fetched articles from storage", storedNews[subject]);
			this.setState({
				isLoaded: true,
				articles: storedNews[subject].articles
			});
			return;
		}

		this.setState({
			isLoaded: false
		});
		fetch("https://newsapi.org/v2/everything?q="+subjectQuery+"&sortBy=publishedAt&apiKey=9a938395749b4a58b79b97009ac735b0")
		.then(res => res.json())
		.then(
			(result) => {
				console.log("Fetched news from API", result);
				storedNews[subject] = {};
				storedNews[subject].articles = result.articles;
				storedNews[subject].time = new Date().getTime();
				localStorage.setItem('articles', JSON.stringify(storedNews));

				this.setState({
					isLoaded: true,
					articles: result.articles
				});
			},

			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	render() {
		const { error, isLoaded, articles } = this.state;

		if (error) {
			return <div className="errorLoadContainer">Error: { error.message }</div>;
		} else if (!isLoaded) {
			return <div className="errorLoadContainer">
				<LoadingNarwhal/>
			</div>
		} else if (this.props.article) {
			const article = this.findArticle(this.props.article);
			return article ?
				<FullArticle article={ article }/> :
				<h1>Article not found</h1>;
		} else {
			const subjectHeader = (this.props.subject !== "all") ?
				<h2 className="subjectHeader">{ this.props.subject }</h2> : "";

			return (
				<div className="articleContainer">
					{ subjectHeader }
					{articles.map((article, index) => (
						<Link
							key={ index }
							className="articleCardLink"
							to={`${ encodeURIComponent(article.url) }`}>
							<CardArticle article={ article }/>
						</Link>
					))}
				</div>
			);
		}
	}

	findArticle(url) {
		// Current subject
		let article = this.state.articles.find(article => {
			return url === article.url;
		});

		if (article) {
			return article;
		}

		// All subjects
		const allArticles = JSON.parse(localStorage.getItem('articles'));
		for (const key in allArticles) {
			if (allArticles[key].articles) {
				article = allArticles[key].articles.find(article => {
					return url === article.url;
				});
			}

			if (article) {
				break;
			}
		}

		return article ? article : null;
	}
}