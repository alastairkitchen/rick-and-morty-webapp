import { useEffect } from 'react';
import { getEpisodes } from 'rickmortyapi'
import { ImageNavItem } from '../types/index';
import Layout from '../components/layout';
import ImageNav from '../components/imageNav';


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

	const episodesItems: ImageNavItem[] = [
		{
			title: 'Season 1',
			url: '/episodes/season/1'
		},
		{
			title: 'Season 2',
			url: '/episodes/season/2'
		},
		{
			title: 'Season 3',
			url: '/episodes/season/3'
		},
		{
			title: 'Season 4',
			url: '/episodes/season/4'
		},
		{
			title: 'Season 5',
			url: '/episodes/season/5'
		},
	]


	return (
		<Layout title="Episodes">
			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<ImageNav items={episodesItems} />
				</div>
			</div>
		</Layout>
	);
}

export default Episodes;

