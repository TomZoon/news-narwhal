import React from "react";

import CardArticle from "./cardArticle/CardArticle";
import {Link} from "react-router-dom";
import FullArticle from "./fullArticle/FullArticle";
import LoadingNarwhal from "./loadingNarwhal/LoadingNarwhal";

export class ArticleController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			articles: []
		};
	}

	componentDidMount() {
		const localArticles = localStorage.getItem('articles');
		if (localArticles) {
			this.setState({
				isLoaded: true,
				articles: JSON.parse(localArticles)
			});
			return;
		}

		fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9a938395749b4a58b79b97009ac735b0")
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				localStorage.setItem('articles', JSON.stringify(result.articles));

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
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <LoadingNarwhal/>
		} else if (this.props.article) {
			let article = this.findArticle(this.props.article);

			if (article) {
				return (
					<FullArticle article={article}/>
				)
			}

			return (
				<h1>Article not found</h1>
			)
		} else {
			return (
				<ul>
					{articles.map((article, index) => (
						<Link key={index} to={`${ encodeURIComponent(article.url) }`}>
							<CardArticle article={ article } ></CardArticle>
						</Link>
					))}
				</ul>
			);
		}
	}

	findArticle(url) {
		console.log(this.state.articles);

		const article = this.state.articles.find(article => {
			return url === article.url;
		});

		return article ? article : null;
	}
}