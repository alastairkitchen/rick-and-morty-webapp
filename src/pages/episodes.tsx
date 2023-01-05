import { useEffect } from 'react';
import { getEpisodes } from 'rickmortyapi'
import { Link } from "react-router-dom";
import Layout from '../components/layout';

function Episodes() {

	useEffect(() => {
		displayEpisodes();
	}, []);

	async function displayEpisodes() {
		const seasonOne = await getEpisodes({
			episode: 's02'
		})
		console.dir(seasonOne);
	}


	return (
		<Layout title="Episodes">
			<div className="site-content__row site-content--cyan">
				<div className="site-content__container">
					<p>
						<Link to="/episodes/season/1">Season 1</Link>
					</p>
					<p>
						<Link to="/episodes/season/2">Season 2</Link>
					</p>
					<p>
						<Link to="/episodes/season/3">Season 3</Link>
					</p>
					<p>
						<Link to="/episodes/season/4">Season 4</Link>
					</p>
					<p>
						<Link to="/episodes/season/5">Season 5</Link>
					</p>

				</div>
			</div>
		</Layout>
	);
}

export default Episodes;

