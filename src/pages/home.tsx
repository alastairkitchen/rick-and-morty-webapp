import { Link } from "react-router-dom";
import Header from "../components/header";
import Layout from '../components/layout';

function Home() {
	return (
		<Layout >
			<p>Welcome to the rick and morty app.. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			<p>
				<Link to="/characters">Characters</Link>
			</p>
			<p>
				<Link to="/episodes">Episodes</Link>
			</p>
		</Layout>
	);
}

export default Home;

