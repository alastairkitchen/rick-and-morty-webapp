import { useState, useEffect, useRef } from 'react';
import { getEpisodes } from 'rickmortyapi'
import { Link } from "react-router-dom";

function Episodes() {

	useEffect(() => {
		displayEpisodes();
	}, []);

	async function displayEpisodes() {
		const seasonOne = await getEpisodes({
			episode: 's02'
		})
		console.dir(seasonOne);
	}


	return (
		<div className="site-wrapper">
			<header className="App-header">
				<img alt="rick and morty" src="https://via.placeholder.com/1800x400"></img>
			</header>
			<p>episodes</p>
			<p>
				<Link to="/episodes/season/1">Season 1</Link>
			</p>
			<p>
				<Link to="/episodes/season/2">Season 2</Link>
			</p>
			<p>
				<Link to="/episodes/season/3">Season 3</Link>
			</p>
			<p>
				<Link to="/episodes/season/4">Season 4</Link>
			</p>
			<p>
				<Link to="/episodes/season/5">Season 5</Link>
			</p>
		</div>
	);
}

export default Episodes;

