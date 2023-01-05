import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEpisodes } from 'rickmortyapi'
import { Episode } from 'rickmortyapi/dist/interfaces'
import Layout from '../components/layout';


function Season() {

	const params = useParams();
	const [episodes, setEpisodes] = useState<Episode[] | undefined>(undefined);


	useEffect(() => {
		displayEpisodes();
	}, []);

	async function displayEpisodes() {
		const episodes = await getEpisodes({
			episode: `s0${params.seasonId}`
		});

		console.dir(episodes.data.results);
		setEpisodes(episodes.data.results);
	}

	return (
		<Layout title={`Season ${params.seasonId}`}>
			<div className="site-content__row">
				<div className="site-content__container">
					<p>
						<Link to="/episodes">Back</Link>
					</p>
					<p>episodes</p>
				</div>
			</div>
			<div className="site-content__row site-content--cyan">
				<div className="site-content__container">
					<table>
						<thead>
							<tr>
								<th>Episode</th>
								<th>Name</th>
								<th>Air Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{episodes && episodes.map((episode: Episode) =>
								<tr>
									<td>{episode.episode}</td>
									<td>{episode.name}</td>
									<td>{episode.air_date}</td>
									<td><Link to={`/episodes/${episode.id}`}>More info</Link></td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}

export default Season;

