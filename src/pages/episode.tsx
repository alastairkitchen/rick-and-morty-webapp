import { useState, useEffect, useCallback } from 'react';
import { getEpisode, getCharacter } from 'rickmortyapi'
import { useParams } from "react-router-dom";
import { EpisodeData, Character } from 'rickmortyapi/dist/interfaces'
import AvatarCard from '../components/AvatarCard';
import BackButton from '../components/backButton';
import Layout from '../components/layout';

function Episode() {

	const params = useParams();
	const [episode, setEpisode] = useState<EpisodeData | undefined>(undefined);
	const [characters, setCharacters] = useState<Character[] | undefined>(undefined);
	const [seasonId, setSeasonId] = useState<number | undefined>(undefined);

	const displayEpisode = useCallback(async () => {
		const episode = await getEpisode(Number(params.episodeId));
		const characterIds = episode.data.characters.map((character: string) => {
			// const characters = 'https://rickandmortyapi.com/api/character/593';
			// const splitCharacters = characters.split('/');
			// console.dir(splitCharacters.at(-1));
			return Number(character.split('/').at(-1));
		});

		const characters: any = await getCharacter(characterIds);
		setEpisode(episode.data);
		setCharacters(characters.data);

		// regex to get season ID
		const pattern = /S(\d+)E(\d+)/; // get characters inbetween "S" and "D"
		const result: RegExpMatchArray | null = episode.data?.episode.match(pattern);
		setSeasonId(result ? parseInt(result[1]) : undefined); // e.g. "S03E09" sets season id to 3
	}, [params]);

	useEffect(() => {
		displayEpisode();
	}, [displayEpisode]);


	return (
		<Layout title={`${episode?.name}`}>
			<div className="site-content__row">
				<div className="site-content__container">
					<BackButton url={`${seasonId ? `/episodes/season/${seasonId}/` : `/episodes`}`} />
					<div className="table-responsive">
						<table className="table table-bordered table-striped episode-table">
							<tbody>
								<tr>
									<td className="episode-table__title">Episode name</td>
									<td>{episode?.name}</td>
								</tr>
								<tr>
									<td className="episode-table__title">Air Date</td>
									<td>{episode?.air_date}</td>
								</tr>
								<tr>
									<td className="episode-table__title">Episode number</td>
									<td>{episode?.id}</td>
								</tr>
								<tr>
									<td className="episode-table__title">Season</td>
									<td>{seasonId}</td>
								</tr>
								<tr>
									<td className="episode-table__title">No of characters in episode</td>
									<td>{characters ? characters.length : 0}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2 className="h2">Characters in episode</h2>
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

export default Episode;

