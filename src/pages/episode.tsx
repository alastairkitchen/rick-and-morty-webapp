import { useState, useEffect, useRef } from 'react';
import { getEpisode, getCharacter } from 'rickmortyapi'
import { Link, useParams } from "react-router-dom";
import { Episode, Character } from 'rickmortyapi/dist/interfaces'
import AvatarCard from '../components/AvatarCard';
import Layout from '../components/layout';

function Episodes() {

	const params = useParams();
	const [episode, setEpisode] = useState<Episode | undefined>(undefined);
	const [characters, setCharacters] = useState<Character[] | undefined>(undefined);

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

		console.dir(characters)
		setEpisode(episode.data);
		setCharacters(characters.data);
	}

	return (
		<Layout title={`Name ${episode?.name}`}>
			<Link to="/episodes/season/1/">Back</Link>

			<p>Air Date {episode?.air_date}</p>
			<p>Episode number {episode?.id}</p>

			<h2>Characters {characters ? characters.length : 0}</h2>
			{
				characters ? characters.map((character: any, i: number) =>
					<AvatarCard key={i} {...character} />
				) : <p>no results</p>
			}
		</Layout>

	);
}

export default Episodes;

