import { Link } from "react-router-dom";
import Layout from '../components/layout';

function Home() {
	return (
		<Layout title='Homepage' imageUrl="/images/rick-and-morty-header.jpg">
			<p>Welcome to the rick and morty app.. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

			<nav>
				<ul className="image-nav__list">
					<li className="image-nav__list-item">
						<Link className="image-nav__anchor" to="/characters">Characters</Link>
					</li>
					<li className="image-nav__list-item">
						<Link className="image-nav__anchor" to="/episodes">Episodes</Link>
					</li>
				</ul>
			</nav>
		</Layout>
	);
}

export default Home;

