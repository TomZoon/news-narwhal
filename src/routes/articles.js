import {useParams} from "react-router-dom";
import {ArticleController} from "../elements/ArticleController";
import SubjectDrawer from "../elements/subjectDrawer/SubjectDrawer";
import './articles.css';

export default function Articles() {
	let params = useParams();

	function handleSubject(subject) {
		console.log(subject);
	}

	return (
		<div className="articles">
			<SubjectDrawer onSelectSubject={ handleSubject }/>
			<ArticleController article={params.article}/>
		</div>
	);
}