import { Link } from "react-router-dom";


function Home() {
	return (
		<div className="site-wrapper">
			<header className="App-header">
				<img alt="rick and morty" src="https://via.placeholder.com/1800x400"></img>
			</header>
			<p>Welcome to the rick and morty app.. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			<p>
				<Link to="/characters">Characters</Link>
			</p>
			<p>
				<Link to="/episodes">Episodes</Link>
			</p>
		</div>
	);
}

export default Home;

