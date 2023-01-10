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

	function renderIntro() {

		let intro: any = {
			1: <p>Premiering on December 2, 2013 with "Pilot" and concluding on April 14, 2014 with "Ricksy Business", the first season of the American animated television series Rick and Morty originally aired on Cartoon Network's Adult Swim late night block, comprising a total of eleven episodes. The season received critical acclaim.</p>,
			2: <p>In 2015, the animated television series Rick and Morty premiered its second season on Adult Swim's late night programming block in the United States. The season began on July 26 with the episode "A Rickle in Time" and ended on October 4 with "The Wedding Squanchers". A total of ten episodes were aired during this season.</p>,
			3: <p>The third season of the American animated television series Rick and Morty, created by Dan Harmon and Justin Roiland, originally aired on Cartoon Network's Adult Swim late night block. It premiered with the episode "The Rickshank Rickdemption", which was unannounced and part of Adult Swim's annual April Fools' prank, airing on April 1, 2017.</p>,
			4: <p>In May 2018, Adult Swim confirmed the production of the fourth season of the animated television series Rick and Morty, with a total of ten episodes. The first half of the season, which comprises of five episodes, aired from November 10, 2019 to December 15, 2019. The remaining episodes of the season were aired subsequently from May 3, 2020 to May 31, 2020.</p>,
			5: <p>The fifth season of the animated television series Rick and Morty, which features Justin Roiland as both titular characters, consisted of 10 episodes, which is part of the 70 episode order by Adult Swim in 2018. The season started airing on June 20, 2021 and ended on September 5, 2021</p>,
		}

		return params.seasonId ? intro[params.seasonId] : null;

	}

	return (
		<Layout title={`Season ${params.seasonId}`}>
			<div className="site-content__row">
				<div className="site-content__container">
					<BackButton url='/episodes' />
					{renderIntro()}
					<h2 className="h2">Episodes in season</h2>
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

