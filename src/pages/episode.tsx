import { useState, useEffect } from 'react';
import { getEpisode, getCharacter } from 'rickmortyapi'
import { useParams } from "react-router-dom";
import { Episode, Character } from 'rickmortyapi/dist/interfaces'
import AvatarCard from '../components/AvatarCard';
import BackButton from '../components/backButton';
import Layout from '../components/layout';

function Episodes() {

	const params = useParams();
	const [episode, setEpisode] = useState<Episode | undefined>(undefined);
	const [characters, setCharacters] = useState<Character[] | undefined>(undefined);
	const [seasonId, setSeasonId] = useState<number | undefined>(undefined);

	useEffect(() => {
		displayEpisode();
	}, []);

	async function displayEpisode() {
		const episode = await getEpisode(Number(params.episodeId));
		const characterIds = episode.data.characters.map((character) => {
			// const characters = 'https://rickandmortyapi.com/api/character/593';
			// const splitCharacters = characters.split('/');
			// console.dir(splitCharacters.at(-1));
			return Number(character.split('/').at(-1));
		});

		const characters = await getCharacter(characterIds);
		setEpisode(episode.data);
		setCharacters(characters.data);

		// regex to get season ID
		const pattern = /S(\d+)E(\d+)/; // get characters inbetween "S" and "D"
		const result: RegExpMatchArray | null = episode.data?.episode.match(pattern);
		setSeasonId(result ? parseInt(result[1]) : undefined); // e.g. "S03E09" sets season id to 3
	}

	return (
		<Layout title={`${episode?.name}`}>
			<div className="site-content__row">
				<div className="site-content__container">
					<BackButton url={`${seasonId ? `/episodes/season/${seasonId}/` : `/episodes`}`} />
					<div className="table-responsive">
						<table className="table table-bordered table-striped episode-table">
							<tbody>
								<tr>
									<td className="episode-table__title" scope="row">Episode name</td>
									<td>{episode?.name}</td>
								</tr>
								<tr>
									<td className="episode-table__title" scope="row">Air Date</td>
									<td>{episode?.air_date}</td>
								</tr>
								<tr>
									<td className="episode-table__title" scope="row">Episode number</td>
									<td>{episode?.id}</td>
								</tr>
								<tr>
									<td className="episode-table__title" scope="row">Season</td>
									<td>{seasonId}</td>
								</tr>
								<tr>
									<td className="episode-table__title" scope="row">No of characters</td>
									<td>{characters ? characters.length : 0}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2 className="h2">Characters list</h2>
				</div>
			</div>
			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<div className="card-grid">
						{
							characters ? characters.map((character: any, i: number) =>
								<AvatarCard key={i} {...character} />
							) : <p>no results</p>
						}
					</div>
				</div>
			</div>

		</Layout>

	);
}

export default Episodes;

