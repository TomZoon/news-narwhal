import './about.css';
import LoadingNarwhal from "../elements/loadingNarwhal/LoadingNarwhal";

export default function About() {
	return <div className="about">
		Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik
		</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

		<h3>Why?</h3>
		<ul>
			<li>No text in images? Because you get the images from an external place there is no telling what the contrast
			of the images will be. This means text might get unreadable.</li>
		</ul>

		<h3>Good points</h3>
		<ul>
			<li>Show loading animations</li>
			<li>Links are shareable</li>
			<li>Fast loading</li>
			<li>Data exception handling (no author)</li>
			<li></li>
		</ul>

		<h3>What to improve</h3>
		<ul>
			<li>Data behavior element (or Redux)</li>
		</ul>

		<LoadingNarwhal />
	</div>;
}