import { useState, useEffect, useRef } from 'react';
import { getEpisode, getCharacter } from 'rickmortyapi'
import { Link, useParams } from "react-router-dom";
import { Episode, Character } from 'rickmortyapi/dist/interfaces'
import AvatarCard from '../components/AvatarCard';
import Layout from '../components/layout';
import { ReactComponent as ChevronLeftIcon } from '../icons/chevron-left.svg';


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
		const result: any = episode.data?.episode.match(pattern);
		setSeasonId(Math.round(result[1])); // e.g. "S03E09" sets season id to 3
	}

	return (
		<Layout title={`Name ${episode?.name}`}>
			<div className="site-content__row">
				<div className="site-content__container">
					<div className="pagination">
						<Link className="button pagination__button" to={`${seasonId ? `/episodes/season/${seasonId}/` : `/episodes`}`}> <ChevronLeftIcon className="svg svg--size-portrait pagination-left__icon" />Back</Link>
					</div>

					<p>Air Date {episode?.air_date}</p>
					<p>Episode number {episode?.id}</p>
					<h2>Characters {characters ? characters.length : 0}</h2>
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

