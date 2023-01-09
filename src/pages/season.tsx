import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEpisodes } from 'rickmortyapi'
import { Episode } from 'rickmortyapi/dist/interfaces'
import Layout from '../components/layout';
import BackButton from '../components/backButton';


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
					<BackButton url='/episodes' />
					<h2 className="h2">episodes</h2>
				</div>
			</div>
			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<div className="table-responsive">
						<table className="table table-bordered table-striped">
							<thead>
								<tr>
									<th scope="col">Episode</th>
									<th scope="col">Name</th>
									<th scope="col">Air Date</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								{episodes && episodes.map((episode: Episode, i) =>
									<tr key={`episode-row-${i}`}>
										<td scope="row">{episode.episode}</td>
										<td>{episode.name}</td>
										<td>{episode.air_date}</td>
										<td><Link className="button" to={`/episodes/${episode.id}`}>More info</Link></td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Season;

