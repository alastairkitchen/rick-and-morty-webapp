import React, { useState, useEffect, useRef, useCallback } from 'react';
import AvatarCard from '../components/AvatarCard';
import { Character } from '../types/index';
import Layout from '../components/layout';
import { ReactComponent as MagnifyingIcon } from '../icons/magnifying-glass.svg';
import { ReactComponent as ChevronLeftIcon } from '../icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../icons/chevron-right.svg';


function Characters() {

	const searchRef = useRef<HTMLInputElement | null>(null);

	const [characters, setCharacters] = useState<[Character] | null>(null);
	const [nextUrl, setNextUrl] = useState<string | null>('');
	const [prevUrl, setPrevUrl] = useState<string | null>('');
	const [loading, setLoading] = useState<boolean>(false);
	let characterTimeout: any;

	const displayCharacters = useCallback(async (url: (string | null) = 'https://rickandmortyapi.com/api/character') => {
		setLoading(true);
		await fetchCharacters(url);
		setLoading(false);
	}, []);

	// load characters
	useEffect(() => {
		displayCharacters();
	}, [displayCharacters]);


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
			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<div className="card-grid">
						{loading && <p>loading</p>}
						{
							characters ? characters.map((character: any, i: number) =>
								<AvatarCard key={i} {...character} />
							) : <p>no results</p>
						}
					</div>
					<div className="pagination">
						{prevUrl && <button className="button pagination__button" onClick={() => displayCharacters(prevUrl)}><ChevronLeftIcon className="svg svg--size-portrait pagination-left__icon" />prev</button>}
						{nextUrl && <button className="button pagination__button" onClick={() => displayCharacters(nextUrl)}>next <ChevronRightIcon className="svg svg--size-portrait pagination-right__icon" /></button>}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Characters;

