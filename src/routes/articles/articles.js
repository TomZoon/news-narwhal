import {useParams} from "react-router-dom";
import {useState} from "react";
import {ArticleController} from "../../elements/articleController/ArticleController";
import SubjectDrawer from "../../elements/subjectDrawer/SubjectDrawer";
import './articles.css';

const Articles = function(props) {
	let params = useParams();

	const [subject, setSubject] = useState("all");
	const [article, setArticle] = useState("");

	const subjects = [
		"Tech",
		"Sports",
		"Economy",
		"Fashion",
		"Culture",
		"Student",
		"Hotel"
	]

	if (params.filter) {
		if (params.filter.startsWith("http") && article !== params.filter) {
			setArticle(params.filter);
		} else if (!params.filter.startsWith("http") && (subject !== params.filter || article)) {
			setArticle("");
			setSubject(params.filter);
		}
	} else {
		if (subject && subject !== "all") {
			setSubject("all");
		}
		if (article) {
			setArticle("");
		}
	}

	return (
		<div className="articles">
			<div className="relativeContainer">
				<SubjectDrawer
					className="subjectDrawer"
					drawerOpen={props.drawerOpen}
					subject={subject}
					subjects={subjects}
				/>
			</div>

			<div className="articleBox">
				<ArticleController
					className="articleController"
					article={article}
					subject={subject}
				/>
			</div>
		</div>
	);
}

export default Articles;