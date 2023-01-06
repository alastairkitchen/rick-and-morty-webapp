import { Link } from "react-router-dom";
import Layout from '../components/layout';

function Home() {
	return (
		<Layout title='Homepage' imageUrl="/images/rick-and-morty-header.jpg">
			<div className="site-content__row">
				<div className="site-content__container">
					<p>Welcome to the rick and morty app.. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
			</div>

			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<nav className="image-nav">
						<ul className="image-nav__list">
							<li className="image-nav__list-item">
								<Link className="image-nav__anchor" to="/characters">Characters</Link>
							</li>
							<li className="image-nav__list-item">
								<Link className="image-nav__anchor" to="/episodes">Episodes</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

		</Layout>
	);
}

export default Home;

