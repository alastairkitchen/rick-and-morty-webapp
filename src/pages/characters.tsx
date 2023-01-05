import React, { useState, useEffect, useRef } from 'react';
import AvatarCard from '../components/AvatarCard';
import { Character } from '../types/index';
import Layout from '../components/layout';
import { ReactComponent as MagnifyingIcon } from '../icons/magnifying-glass.svg';


function Characters() {

	// load characters
	useEffect(() => {
		displayCharacters();
	}, []);

	const searchRef = useRef<HTMLInputElement | null>(null);

	const [characters, setCharacters] = useState<[Character] | null>(null);
	const [nextUrl, setNextUrl] = useState<string | null>('');
	const [prevUrl, setPrevUrl] = useState<string | null>('');
	const [loading, setLoading] = useState<boolean>(false);
	let characterTimeout: any;

	function fetchCharacters(url: string | null) {
		if (url) {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not OK');
					}
					return response.json();
				})
				.then((data) => {
					const transformData: any = () => {

						return data.results.map((character: Character) => {
							return {
								image: character.image,
								name: character.name,
								status: character.status,
								species: character.species,
								gender: character.gender,
								origin: {
									name: character.origin.name
								},
								episode: character.episode
							}
						})
					}
					setCharacters(transformData());
					setNextUrl(data.info.next);
					setPrevUrl(data.info.prev);
					setLoading(false);
				})
				.catch((error) => {
					console.error(error.message);
					setCharacters(null);
					setNextUrl(null);
					setPrevUrl(null);
				});

		}
	}

	async function displayCharacters(url: (string | null) = 'https://rickandmortyapi.com/api/character') {
		setLoading(true);
		await fetchCharacters(url);
		setLoading(false);
	}

	const searchCharacters = (e: React.KeyboardEvent) => {
		clearTimeout(characterTimeout)

		if (e.key === 'Enter') {
			displayCharacters(`https://rickandmortyapi.com/api/character/?name=${searchRef.current?.value}`);

			return;
		}

		characterTimeout = setTimeout(() => {
			displayCharacters(`https://rickandmortyapi.com/api/character/?name=${searchRef.current?.value}`);
		}, 800)

	}

	function clearSearchTimeout() {
		clearTimeout(characterTimeout);
	}

	return (
		<Layout title="Characters">
			<div className="site-content__row">
				<div className="site-content__container">
					<div className="search-ui">
						<input className="search-ui__input" ref={searchRef} type="text" placeholder="Search" onKeyDown={clearSearchTimeout} onKeyUp={(e) => searchCharacters(e)} />
						<MagnifyingIcon className="svg search-ui__icon" />
					</div>
				</div>
			</div>
			<div className="site-content__row site-content--cyan">
				<div className="site-content__container">
					<div className="card-grid">
						{loading && <p>loading</p>}
						{
							characters ? characters.map((character: any, i: number) =>
								<AvatarCard key={i} {...character} />
							) : <p>no results</p>
						}
					</div>
					{prevUrl && <button onClick={() => displayCharacters(prevUrl)}>prev</button>}
					{nextUrl && <button onClick={() => displayCharacters(nextUrl)}>next</button>}
				</div>
			</div>
		</Layout>
	);
}

export default Characters;

