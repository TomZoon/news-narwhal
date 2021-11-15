import './about.css';
import LoadingNarwhal from "../../elements/loadingNarwhal/LoadingNarwhal";

export default function About() {
	return <div className="about">
		<h2>About News Narwhal</h2>
		<p>Made by Tom Zoon using the news api from newsapi.org for a coding assignment</p>
		<p>More info in the Readme.md of this project</p>

		<h3>Loading animation:</h3>
		<LoadingNarwhal />
		<br/>
		Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik
		</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
	</div>;
}