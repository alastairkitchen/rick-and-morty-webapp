import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import { getEpisodes } from 'rickmortyapi'
import { Episode } from 'rickmortyapi/dist/interfaces'


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
		<div className="site-wrapper">
			<Header title={`Season ${params.seasonId}`} />
			<p>
				<Link to="/episodes">Back</Link>
			</p>
			<p>episodes</p>

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
	);
}

export default Season;

